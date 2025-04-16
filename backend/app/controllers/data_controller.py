# app/controllers/data_controller.py
from fastapi import APIRouter
from app.services.data_service import load_data
from app.utils import generate_response

router = APIRouter()

@router.get("/api/data")
def get_data():
    """Returns dummy data (e.g., list of sales reps)."""
    data = load_data()
    return generate_response(200, data["salesReps"])
