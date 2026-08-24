# 🧠 Moner Ayna --- মনের আয়না

```{=html}
<p align="center">
```
`<img src="logo.png" alt="Moner Ayna Logo" width="650">`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<strong>`{=html}AI-powered Student Mental Health Analysis
System`</strong>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<em>`{=html}Understanding student mental health through data-driven
insights.`</em>`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## 🌐 Live Application

🔗 **Live Backend / API:** `YOUR_RENDER_LIVE_LINK`

> Replace `YOUR_RENDER_LIVE_LINK` with your deployed Render URL.

------------------------------------------------------------------------

## 📌 About the Project

**Moner Ayna (মনের আয়না)** is a machine-learning-based mental health
analysis project designed to study the relationship between students'
social-media usage and their mental well-being.

The project uses a trained machine learning model to analyze relevant
student information and provide a prediction through a simple web
interface.

The name **Moner Ayna**, meaning **"Mirror of the Mind"**, represents
the project's goal of using technology and data to reflect and
understand patterns related to student mental health.

------------------------------------------------------------------------

## 🎯 Objectives

-   Analyze factors that may affect students' mental health.
-   Study the impact of social-media usage on students.
-   Use machine learning for predictive analysis.
-   Provide an easy-to-use web interface.
-   Deploy the prediction API so it can be accessed online.
-   Demonstrate how AI/ML can support data-driven mental health
    awareness.

------------------------------------------------------------------------

## ✨ Features

-   🧠 Machine-learning-based prediction
-   📊 Student social-media and mental-health dataset
-   🤖 Pre-trained ML model
-   ⚡ FastAPI backend
-   🌐 Web-based user interface
-   🔗 REST API for prediction
-   🚀 Cloud deployment using Render
-   📓 Jupyter Notebook containing the ML workflow
-   📁 Separate frontend and backend files for easier development

------------------------------------------------------------------------

## 🏗️ Project Architecture

``` text
                     ┌──────────────────────┐
                     │      User / UI        │
                     │   HTML + CSS + JS     │
                     └──────────┬───────────┘
                                │
                                │ HTTP Request
                                ▼
                     ┌──────────────────────┐
                     │    FastAPI Backend   │
                     │       main.py        │
                     └──────────┬───────────┘
                                │
                                │ Load Model
                                ▼
                     ┌──────────────────────┐
                     │ Mental Health Model  │
                     │ .pk1 / Scikit-learn  │
                     └──────────┬───────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │ Prediction / Result  │
                     └──────────────────────┘
```

------------------------------------------------------------------------

## 📂 Project Structure

``` text
MonerAyna/
│
├── .gitignore
│
├── MLProject.ipynb
│       └── Machine Learning model development
│
├── Mental_Health_Model.pk1
│       └── Trained machine learning model
│
├── Student Social Media And Mental Health Impact.csv
│       └── Dataset used for analysis/training
│
├── main.py
│       └── FastAPI backend
│
├── index.html
│       └── Frontend interface
│
├── style.css
│       └── Frontend styling
│
├── script.js
│       └── Frontend JavaScript and API communication
│
└── requirements.txt
        └── Python dependencies
```

------------------------------------------------------------------------

## 🛠️ Technologies Used

### Backend

-   Python
-   FastAPI
-   Uvicorn
-   Scikit-learn
-   NumPy
-   Pandas
-   Pickle

### Frontend

-   HTML5
-   CSS3
-   JavaScript

### Machine Learning

-   Supervised Machine Learning
-   Scikit-learn
-   Data preprocessing
-   Model training
-   Model evaluation
-   Model serialization

### Deployment

-   Render
-   GitHub

------------------------------------------------------------------------

## 📊 Dataset

The project uses the following dataset:

**`Student Social Media And Mental Health Impact.csv`**

The dataset contains student-related information associated with
social-media usage and mental-health-related factors.

The dataset is used during the machine-learning workflow to:

1.  Load and inspect the data.
2.  Perform data preprocessing.
3.  Select relevant features.
4.  Train the machine learning model.
5.  Evaluate the model.
6.  Save the trained model.
7.  Use the saved model for predictions through FastAPI.

> **Note:** This project is intended for educational and research
> purposes. Predictions should not be treated as a medical diagnosis.

------------------------------------------------------------------------

## 🤖 Machine Learning Model

The trained model is stored as:

``` text
Mental_Health_Model.pk1
```

The FastAPI backend loads this trained model and uses it to generate
predictions based on the input received from the frontend.

The complete machine-learning workflow is available in:

``` text
MLProject.ipynb
```

------------------------------------------------------------------------

## ⚡ Running the Project Locally

### 1. Clone the repository

``` bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd MonerAyna
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your GitHub repository URL.

### 2. Create a virtual environment

Windows:

``` bash
python -m venv venv
venv\Scripts\activate
```

macOS / Linux:

``` bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

``` bash
pip install -r requirements.txt
```

### 4. Start the FastAPI server

``` bash
uvicorn main:app --reload
```

The backend should now be available at:

``` text
http://127.0.0.1:8000
```

------------------------------------------------------------------------

## 📖 FastAPI Documentation

Once the backend is running, FastAPI automatically provides interactive
API documentation.

### Swagger UI

``` text
http://127.0.0.1:8000/docs
```

### ReDoc

``` text
http://127.0.0.1:8000/redoc
```

These interfaces can be used to test the API endpoints.

------------------------------------------------------------------------

## 🌐 Frontend

The project includes a simple frontend consisting of:

``` text
index.html
style.css
script.js
```

The frontend collects the required information from the user and
communicates with the FastAPI backend using JavaScript.

The frontend can be opened locally or served through a web server
depending on the deployment configuration.

------------------------------------------------------------------------

## 🚀 Deployment on Render

The backend can be deployed on **Render**.

A typical Render configuration is:

``` text
Build Command:
pip install -r requirements.txt

Start Command:
uvicorn main:app --host 0.0.0.0 --port $PORT
```

After deployment, Render provides a public URL such as:

``` text
https://your-project-name.onrender.com
```

Add that URL to the **Live Application** section above.

------------------------------------------------------------------------

## 🔄 How the System Works

``` text
User enters information
          ↓
Frontend validates input
          ↓
JavaScript sends API request
          ↓
FastAPI receives request
          ↓
Trained ML model is loaded
          ↓
Input is processed
          ↓
Model generates prediction
          ↓
FastAPI returns response
          ↓
Frontend displays result
```

------------------------------------------------------------------------

## 🧪 Machine Learning Workflow

The machine-learning workflow followed in `MLProject.ipynb` can be
summarized as:

``` text
Dataset
   ↓
Data Exploration
   ↓
Data Cleaning
   ↓
Data Preprocessing
   ↓
Feature Selection
   ↓
Train/Test Split
   ↓
Model Training
   ↓
Model Evaluation
   ↓
Model Serialization
   ↓
Mental_Health_Model.pk1
   ↓
FastAPI Integration
```

------------------------------------------------------------------------

## 🔐 Important Note

Moner Ayna is an **educational machine-learning project**.

It is **not a medical diagnostic system**, and its predictions should
not be used as a substitute for professional mental-health assessment,
diagnosis, or treatment.

------------------------------------------------------------------------

## 🔮 Future Improvements

-   [ ] Add user authentication.
-   [ ] Add a database for storing prediction history.
-   [ ] Improve model accuracy with additional datasets.
-   [ ] Compare multiple machine-learning algorithms.
-   [ ] Add model performance visualizations.
-   [ ] Add personalized mental-health resources.
-   [ ] Add multilingual support.
-   [ ] Improve mobile responsiveness.
-   [ ] Add automated model retraining.
-   [ ] Add monitoring and logging for the deployed API.
-   [ ] Improve frontend UX and accessibility.

------------------------------------------------------------------------

## 📸 Project Preview

The project interface is designed around the **Moner Ayna --- মনের
আয়না** identity, focusing on a clean and approachable experience.

Add screenshots to the repository and reference them here:

``` markdown
![Moner Ayna Home Page](screenshots/home.png)
```

------------------------------------------------------------------------

## 📜 License

This project is created for educational and academic purposes.

If you want to use, modify, or redistribute this project, please provide
appropriate attribution to the original author.

------------------------------------------------------------------------

## 👨‍💻 Author

**Sayan Pal**

MCA --- KIIT School of Computer Application

GitHub: `https://github.com/sayan629`

LinkedIn: `https://www.linkedin.com/in/sayanpal04/`

------------------------------------------------------------------------

```{=html}
<p align="center">
```
Made with ❤️ by `<strong>`{=html}Sayan Pal`</strong>`{=html}
```{=html}
</p>
```
