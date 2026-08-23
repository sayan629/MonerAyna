import joblib
from fastapi import FastAPI

model = joblib.load('Mental_Health_Model.pk1')

app = FastAPI()

@app.get('/')
def greet():
    return {'Welcome Sayan'}

@app.post('/predict')
def predict(data : dict):
    input_row = {
        'Age', 
        'Gender',
        'Country',
        'Academic_Level',
        'Most_Used_Platform',
        'Purpose_Of_Use',
        'Avg_Daily_Usage_Hours',
        'Daily_Unlocks',
        'Study_Hours',
        'Physical_Activity_Hours',
        'Sleep_Hours_Per_Night',
        'Stress_Level',
        'Mental_Health_Score',
        'Grouped_country'
    }