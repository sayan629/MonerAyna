import joblib
from fastapi import FastAPI

model = joblib.load('Mental_Health_Model.pk1')

app = FastAPI()

@app.get('/')
def greet():
    return {'Welcome Sayan'}