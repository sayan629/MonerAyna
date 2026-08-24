// =============================================================
// CONFIG
// =============================================================
const API_URL = "http://127.0.0.1:8000/predict";

// The gauge is a visual aid only — the FastAPI model doesn't publish a
// guaranteed min/max for its output, so we clamp the arc fill to this
// assumed display range while still showing the model's exact number.
const GAUGE_MIN = 0;
const GAUGE_MAX = 10;
const GAUGE_ARC_LENGTH = 314.16; // matches stroke-dasharray in style.css

// =============================================================
// ELEMENT REFERENCES
// =============================================================
const form = document.getElementById("predict-form");
const submitBtn = document.getElementById("submit-btn");
const resultSection = document.getElementById("result");
const gaugeFill = document.getElementById("gauge-fill");
const gaugeNumber = document.getElementById("gauge-number");
const gaugeBadge = document.getElementById("gauge-badge");
const resetBtn = document.getElementById("reset-btn");
const errorToast = document.getElementById("error-toast");
const errorToastText = document.getElementById("error-toast-text");

let errorToastTimer = null;

// =============================================================
// VALIDATION
// =============================================================

// Fields validated purely by "does it have a value" — number ranges are
// already enforced by min/max/step on the inputs themselves via reportValidity.
function validateForm() {
  let isValid = true;

  const fields = form.querySelectorAll(".field");
  fields.forEach((fieldWrapper) => {
    const input = fieldWrapper.querySelector("input, select");
    if (!input) return;

    const empty = input.value === null || input.value.trim() === "";
    const outOfRange = !input.checkValidity();

    if (empty || outOfRange) {
      fieldWrapper.classList.add("invalid");
      isValid = false;
    } else {
      fieldWrapper.classList.remove("invalid");
    }
  });

  return isValid;
}

// Clear the invalid state on a field as soon as the person fixes it
form.querySelectorAll("input, select").forEach((input) => {
  input.addEventListener("input", () => {
    const wrapper = input.closest(".field");
    if (wrapper && input.checkValidity() && input.value.trim() !== "") {
      wrapper.classList.remove("invalid");
    }
  });
});

// =============================================================
// PAYLOAD BUILDING
// =============================================================
function buildPayload() {
  const data = new FormData(form);

  return {
    age: parseInt(data.get("age"), 10),
    gender: data.get("gender"),
    country: data.get("country").trim(),
    academic_level: data.get("academic_level"),
    most_used_platform: data.get("most_used_platform"),
    purpose_of_use: data.get("purpose_of_use"),
    avg_daily_usage_hours: parseFloat(data.get("avg_daily_usage_hours")),
    daily_unlocks: parseInt(data.get("daily_unlocks"), 10),
    study_hours: parseFloat(data.get("study_hours")),
    physical_activity_hours: parseFloat(data.get("physical_activity_hours")),
    sleep_hours_per_night: parseFloat(data.get("sleep_hours_per_night")),
    stress_level: data.get("stress_level"),
  };
}

// =============================================================
// API CALL
// =============================================================
async function submitPrediction(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    // Try to surface FastAPI's own validation message if there is one
    let detail = `Request failed with status ${response.status}.`;
    try {
      const errBody = await response.json();
      if (errBody && errBody.detail) {
        detail = typeof errBody.detail === "string"
          ? errBody.detail
          : JSON.stringify(errBody.detail);
      }
    } catch (_) {
      // response wasn't JSON — keep the generic message
    }
    throw new Error(detail);
  }

  return response.json();
}

// =============================================================
// UI STATE HELPERS
// =============================================================
function setLoading(isLoading) {
  submitBtn.classList.toggle("loading", isLoading);
  submitBtn.disabled = isLoading;
}

function showError(message) {
  errorToastText.textContent = message;
  errorToast.hidden = false;

  clearTimeout(errorToastTimer);
  errorToastTimer = setTimeout(() => {
    errorToast.hidden = true;
  }, 6000);
}

// Four-tier read of where the score sits within the assumed display range.
// Mirrors the vocabulary already used for stress_level (Low/Medium/High/Very High)
// so the whole UI stays consistent. This describes the *magnitude* of the score,
// not whether that's "good" or "bad" — the model's own scale determines that.
const SIGNAL_BANDS = [
  { max: 0.25, label: "Low",       levelClass: "level-low",      stroke: "#6B9A8D" },
  { max: 0.50, label: "Medium",    levelClass: "level-medium",   stroke: "#D9AE79" },
  { max: 0.75, label: "High",      levelClass: "level-high",     stroke: "#E3936B" },
  { max: Infinity, label: "Very High", levelClass: "level-veryhigh", stroke: "#C05B4E" },
];

function getSignalBand(fraction) {
  return SIGNAL_BANDS.find((band) => fraction <= band.max) || SIGNAL_BANDS[SIGNAL_BANDS.length - 1];
}

function showResult(score) {
  const clamped = Math.min(GAUGE_MAX, Math.max(GAUGE_MIN, score));
  const fraction = (clamped - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN);
  const band = getSignalBand(fraction);

  // Colour the arc along a calm sage -> warm clay range so the gauge reads
  // as a spectrum rather than a pass/fail signal.
  gaugeFill.style.stroke = band.stroke;

  // Update the qualitative signal badge (Low / Medium / High / Very High)
  gaugeBadge.textContent = band.label;
  gaugeBadge.className = "gauge-badge " + band.levelClass;

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

  // Animate the number count-up
  animateNumber(gaugeNumber, score);

  // Animate the arc fill on the next frame so the transition actually runs
  gaugeFill.style.strokeDashoffset = GAUGE_ARC_LENGTH;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      gaugeFill.style.strokeDashoffset = String(GAUGE_ARC_LENGTH * (1 - fraction));
    });
  });
}

function animateNumber(el, target) {
  const duration = 900;
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const current = target * eased;
    el.textContent = current.toFixed(2);
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// =============================================================
// EVENTS
// =============================================================
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    const firstInvalid = form.querySelector(".field.invalid input, .field.invalid select");
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const payload = buildPayload();

  setLoading(true);
  try {
    const result = await submitPrediction(payload);
    showResult(result.predicted_mental_health_score);
  } catch (err) {
    const message = err instanceof TypeError
      ? "Can't reach the prediction server. Make sure the FastAPI backend is running at 127.0.0.1:8000."
      : err.message || "Something went wrong while getting your score.";
    showError(message);
  } finally {
    setLoading(false);
  }
});

resetBtn.addEventListener("click", () => {
  form.reset();
  form.querySelectorAll(".field").forEach((f) => f.classList.remove("invalid"));
  resultSection.hidden = true;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
});
