from fastapi import FastAPI
import random

app = FastAPI()

@app.post("/process-payment")
def process_payment(payload: dict):
    approved = random.random() < 0.8
    return {
        "status": "approved" if approved else "rejected"
    }
