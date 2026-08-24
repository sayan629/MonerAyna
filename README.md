# 🧠 Moner Ayna — মনের আয়না

<p align="center">
  <img src="logo.png" alt="Moner Ayna Logo" width="650">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=3000&pause=1000&color=6C63FF&center=true&vCenter=true&width=800&lines=AI-powered+Student+Mental+Health+Analysis;Understanding+Students+Through+Data+%F0%9F%A7%A0;Machine+Learning+%2B+FastAPI+%2B+Web;Welcome+to+Moner+Ayna+%E2%80%94+%E0%A6%AE%E0%A6%A8%E0%A7%87%E0%A6%B0+%E0%A6%86%E0%A6%AF%E0%A6%BC%E0%A6%A8%E0%A6%BE" alt="Typing SVG">
</p>

<p align="center">
  <strong>AI-powered Student Mental Health Analysis System</strong>
</p>

<p align="center">
  <em>Understanding student mental health through data-driven insights.</em>
</p>

<p align="center">
  <a href="https://monerayna-1.onrender.com">
    <img src="https://img.shields.io/badge/🌐_Live_API-Moner_Ayna-6C63FF?style=for-the-badge" alt="Live API">
  </a>
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Scikit--Learn-ML-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit Learn">
  <img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Render">
</p>

---

## 🌐 Live Application

### 🚀 Live Backend / API

<p align="center">

<a href="https://monerayna-1.onrender.com">
  <img src="https://img.shields.io/badge/OPEN_LIVE_API-%F0%9F%9A%80-6C63FF?style=for-the-badge" alt="Open Live API">
</a>

</p>

**Live URL:**
https://monerayna-1.onrender.com

### 📖 API Documentation

Once the Render service is running, FastAPI provides interactive documentation at:

* **Swagger UI:** `https://monerayna-1.onrender.com/docs`
* **ReDoc:** `https://monerayna-1.onrender.com/redoc`

> **Note:** Render services on free-tier infrastructure may take a short time to wake up after inactivity.

---

## 📌 About the Project

**Moner Ayna (মনের আয়না)** is a machine-learning-based mental health analysis project designed to study the relationship between **students, social-media usage, and mental well-being**.

The project uses a trained machine-learning model to analyze relevant student information and provide a prediction through a simple and approachable web interface.

The name **Moner Ayna**, meaning **"Mirror of the Mind"**, represents the project's goal of using technology and data to reflect and understand patterns related to student mental health.

<p align="center">

🧠 **Data → Machine Learning → Prediction → Insight**

</p>

---

## 🎯 Objectives

* 🧠 Analyze factors that may affect students' mental health.
* 📱 Study the impact of social-media usage on students.
* 🤖 Use machine learning for predictive analysis.
* 🌐 Provide an easy-to-use web interface.
* ⚡ Build a REST API for prediction.
* ☁️ Deploy the backend online using Render.
* 📊 Demonstrate how AI/ML can support data-driven mental-health awareness.

---

## ✨ Features

| Feature              | Description                                     |
| -------------------- | ----------------------------------------------- |
| 🧠 ML Prediction     | Machine-learning-based mental health prediction |
| 📊 Dataset           | Student social-media and mental-health dataset  |
| 🤖 Trained Model     | Pre-trained Scikit-learn model                  |
| ⚡ FastAPI            | High-performance Python backend                |
| 🌐 Web UI            | Simple browser-based interface                  |
| 🔗 REST API          | API-based model prediction                      |
| 🚀 Deployment        | Cloud deployment using Render                   |
| 📓 Jupyter Notebook  | Complete ML workflow                            |
| 📁 Modular Structure | Separate frontend and backend files             |

---

## 🏗️ Project Architecture

```text
                         ┌─────────────────────────┐
                         │       👤 User / UI      │
                         │     HTML + CSS + JS     │
                         └────────────┬────────────┘
                                      │
                                      │ HTTP Request
                                      ▼
                         ┌─────────────────────────┐
                         │    ⚡ FastAPI Backend   │
                         │         main.py         │
                         └────────────┬────────────┘
                                      │
                                      │ Load Trained Model
                                      ▼
                         ┌─────────────────────────┐
                         │    🧠 ML Model          │
                         │ Mental_Health_Model.pk1 │
                         │      Scikit-learn       │
                         └────────────┬────────────┘
                                      │
                                      │ Prediction
                                      ▼
                         ┌─────────────────────────┐
                         │     📊 Result / Insight │
                         └─────────────────────────┘
```

---

## 🔄 How Moner Ayna Works

```text
👤 User enters information
          │
          ▼
📝 Frontend validates input
          │
          ▼
📡 JavaScript sends API request
          │
          ▼
⚡ FastAPI receives request
          │
          ▼
🧠 Trained ML model processes input
          │
          ▼
🤖 Model generates prediction
          │
          ▼
📤 FastAPI returns response
          │
          ▼
🌐 Frontend displays result
```

---

## 📂 Project Structure

```text
MonerAyna/
│
├── 📄 .gitignore
│
├── 📓 MLProject.ipynb
│       └── Machine Learning model development
│
├── 🧠 Mental_Health_Model.pk1
│       └── Trained machine learning model
│
├── 📊 Student Social Media And Mental Health Impact.csv
│       └── Dataset used for analysis/training
│
├── ⚡ main.py
│       └── FastAPI backend
│
├── 🌐 index.html
│       └── Frontend interface
│
├── 🎨 style.css
│       └── Frontend styling
│
├── ⚙️ script.js
│       └── Frontend JavaScript and API communication
│
└── 📦 requirements.txt
        └── Python dependencies
```

---

## 🛠️ Technologies Used

### 🐍 Backend

<p align="center">

<img src="https://skillicons.dev/icons?i=python,fastapi" alt="Backend Technologies">

</p>

* Python
* FastAPI
* Uvicorn
* Scikit-learn
* NumPy
* Pandas
* Pickle

### 🌐 Frontend

<p align="center">

<img src="https://skillicons.dev/icons?i=html,css,js" alt="Frontend Technologies">

</p>

* HTML5
* CSS3
* JavaScript

### 🤖 Machine Learning

* Supervised Machine Learning
* Scikit-learn
* Data preprocessing
* Feature selection
* Model training
* Model evaluation
* Model serialization

### ☁️ Deployment & Development

<p align="center">

<img src="https://skillicons.dev/icons?i=git,github" alt="Development Tools">

</p>

* Git
* GitHub
* Render
* REST API

---

## 📊 Dataset

The project uses:

```text
Student Social Media And Mental Health Impact.csv
```

The dataset contains student-related information associated with **social-media usage and mental-health-related factors**.

The dataset is used during the machine-learning workflow to:

```text
Load Dataset
     ↓
Explore Data
     ↓
Clean Data
     ↓
Preprocess Data
     ↓
Select Features
     ↓
Train Model
     ↓
Evaluate Model
     ↓
Save Model
     ↓
FastAPI Integration
```

### 📌 Dataset Purpose

The dataset helps explore relationships between student characteristics, social-media behavior, and mental-health-related outcomes.

> ⚠️ **Important:** This project is intended for educational and research purposes. Predictions should **not** be treated as medical diagnoses.

---

## 🤖 Machine Learning Model

The trained model is stored as:

```text
Mental_Health_Model.pk1
```

The FastAPI backend loads this model and uses it to generate predictions based on the information received from the frontend.

The complete machine-learning workflow is available in:

```text
MLProject.ipynb
```

### 🧪 ML Workflow

```text
              📊 Dataset
                  │
                  ▼
          🔍 Data Exploration
                  │
                  ▼
            🧹 Data Cleaning
                  │
                  ▼
         ⚙️ Data Preprocessing
                  │
                  ▼
          🎯 Feature Selection
                  │
                  ▼
          ✂️ Train/Test Split
                  │
                  ▼
          🤖 Model Training
                  │
                  ▼
          📈 Model Evaluation
                  │
                  ▼
          💾 Model Serialization
                  │
                  ▼
       🧠 Mental_Health_Model.pk1
                  │
                  ▼
          ⚡ FastAPI Integration
```

---

# ⚡ Running the Project Locally

## 1️⃣ Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd MonerAyna
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your GitHub repository URL.

---

## 2️⃣ Create a Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### macOS / Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ Start FastAPI

```bash
uvicorn main:app --reload
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

---

# 📖 FastAPI Documentation

After starting the backend, FastAPI automatically provides interactive API documentation.

### Swagger UI

```text
http://127.0.0.1:8000/docs
```

### ReDoc

```text
http://127.0.0.1:8000/redoc
```

Swagger UI can be used to test API endpoints directly from the browser.

---

# 🌐 Frontend

The frontend consists of:

```text
index.html
style.css
script.js
```

The interface collects the required information from the user and communicates with the FastAPI backend through JavaScript.

### Frontend → Backend

```text
Browser
   │
   │ JavaScript Fetch / HTTP
   ▼
FastAPI API
   │
   ▼
ML Model
   │
   ▼
Prediction
   │
   ▼
JSON Response
   │
   ▼
Frontend Result
```

---

# 🚀 Deployment on Render

The backend is deployed using **Render**.

### Build Command

```bash
pip install -r requirements.txt
```

### Start Command

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

### 🌐 Production URL

```text
https://monerayna-1.onrender.com
```

### API Documentation

```text
https://monerayna-1.onrender.com/docs
```

---

# 🔌 API

The FastAPI backend exposes endpoints for communicating with the machine-learning model.

A typical prediction request follows this flow:

```text
Frontend
   │
   │ POST Request
   ▼
/predict
   │
   ▼
Input Validation
   │
   ▼
Feature Processing
   │
   ▼
ML Model
   │
   ▼
Prediction
   │
   ▼
JSON Response
```

You can inspect the exact available endpoints using the live Swagger documentation:

👉 **https://monerayna-1.onrender.com/docs**

---

# 🧪 Testing the API

You can test the deployed API through:

### Swagger

```text
https://monerayna-1.onrender.com/docs
```

or locally:

```text
http://127.0.0.1:8000/docs
```

Swagger provides an interactive environment for sending requests and viewing responses.

---

# 📸 Project Preview

The Moner Ayna interface is designed around a clean, approachable visual identity focused on student mental-health awareness.

Add your screenshots inside:

```text
screenshots/
```

Then reference them like this:

```markdown
![Moner Ayna Home Page](screenshots/home.png)
```

Example:

<p align="center">
  <img src="screenshots/home.png" alt="Moner Ayna Home Page" width="900">
</p>

---

# 🔐 Important Disclaimer

> 🧠 **Moner Ayna is an educational and academic machine-learning project.**

It is **not a medical diagnostic system**.

The predictions generated by this project should not be used as a substitute for:

* Professional mental-health assessment
* Medical diagnosis
* Psychological evaluation
* Professional treatment
* Emergency mental-health support

The purpose of this project is to demonstrate how **machine learning and data analysis can be applied to student mental-health-related datasets**.

---

# 🔮 Future Improvements

* 🔐 Add user authentication.
* 🗄️ Add a database for prediction history.
* 📊 Improve model performance with additional datasets.
* 🤖 Compare multiple machine-learning algorithms.
* 📈 Add model-performance visualizations.
* 🧠 Add personalized mental-health resources.
* 🌍 Add multilingual support.
* 📱 Improve mobile responsiveness.
* 🔄 Add automated model retraining.
* 📡 Add API monitoring and logging.
* ♿ Improve accessibility.
* 🎨 Improve frontend UX.
* ☁️ Add scalable cloud infrastructure.
* 📊 Add an analytics dashboard.

---

# 🌟 Why "Moner Ayna"?

**মনের আয়না (Moner Ayna)** translates to:

> **"Mirror of the Mind"**

The idea behind the name is simple:

```text
                 🪞 MONER AYNA
                      │
                      ▼
              ┌───────────────┐
              │     Student   │
              │     Data      │
              └───────┬───────┘
                      │
                      ▼
                🤖 AI / ML
                      │
                      ▼
                📊 Analysis
                      │
                      ▼
                 💡 Insight
```

Just like a mirror reflects our appearance, **Moner Ayna aims to reflect patterns within student data through AI and machine learning.**

---

# 📈 Project Vision

<p align="center">

### 🧠 Understand → 📊 Analyze → 🤖 Predict → 💡 Create Awareness

</p>

The long-term vision of Moner Ayna is to explore how responsible AI can help researchers and educators better understand factors associated with student well-being.

---

# 👨‍💻 Author

<p align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=6C63FF&center=true&vCenter=true&width=500&lines=Sayan+Pal;MCA+%7C+KIIT;AI+%26+ML+Enthusiast" alt="Sayan Pal">

</p>

### **Sayan Pal**

🎓 **MCA — KIIT School of Computer Application**

🐙 **GitHub:**
https://github.com/sayan629

💼 **LinkedIn:**
https://www.linkedin.com/in/sayanpal04/

---

# ⭐ Support the Project

If you find **Moner Ayna** interesting or useful:

⭐ Star the repository
🍴 Fork the project
🐛 Report issues
💡 Suggest improvements
📢 Share the project

Your feedback can help improve the project.

---

<p align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6C63FF&height=120&section=footer" alt="Footer">

</p>

<p align="center">

<strong>🧠 Moner Ayna — মনের আয়না</strong>

<br>

<em>Turning student data into meaningful insights with AI.</em>

<br><br>

Made with ❤️ by <strong>Sayan Pal</strong>

</p>
