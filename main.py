import joblib
import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel

model = joblib.load('Mental_Health_Model.pk1')

app = FastAPI()


# First Pydantic model
class StudentData(BaseModel):
    age                     : int = Field(..., ge=10, le=100)
    gender                  : Literal['Male', 'Female']
    country                 : str
    academic_level          : Literal['Undergraduate', 'Graduate', 'High School']
    most_used_platform      : Literal['Facebook', 'LinkedIn', 'Instagram', 'Snapchat','Twitter','YouTube', 'TikTok', 'LINE', 'KakaoTalk', 'VKontakte', 'WhatsApp','WeChat']
    purpose_of_use          : Literal['Networking', 'Education', 'Entertainment', 'News']
    avg_daily_usage_hours   : float = Field(..., ge=0, le=24)
    daily_unlocks           : int   = Field(..., ge=0)
    study_hours             : float = Field(..., ge=0, le=24)
    physical_activity_hours : float = Field(..., ge=0, le=24)
    sleep_hours_per_night   : float = Field(..., ge=0, le=24)
    stress_level            : Literal['Medium', 'Low', 'Very High', 'High']  
    

@app.get('/')
def greet():
    return {'Welcome Sayan'}

@app.post('/predict')
def predict(data : StudentData):
    input_row = pd.DataFrame([{
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
    }])
    
