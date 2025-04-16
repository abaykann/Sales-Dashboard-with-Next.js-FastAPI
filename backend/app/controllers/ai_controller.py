# app/controllers/ai_controller.py
from fastapi import APIRouter, Request
from app.services.ai_service import generate_ai_response
from app.utils import generate_response

router = APIRouter()

@router.post("/api/ai")
async def ai_endpoint(request: Request):
    body = await request.json()
    user_question = body.get("question", "")
    response = generate_ai_response(user_question)
    return generate_response(200, response)
