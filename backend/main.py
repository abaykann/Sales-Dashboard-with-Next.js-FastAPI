from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from data_loader import load_dummy_data
from ai_logic import generate_ai_response

app = FastAPI()

# Menambahkan CORS Middleware jika diperlukan
origins = [
    "http://localhost:3000",  # Frontend yang berjalan di localhost:3000
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Memuat data dummy
DUMMY_DATA = load_dummy_data()

@app.get("/api/data")
def get_data():
    """
    Returns dummy data (e.g., list of users).
    """
    return DUMMY_DATA

@app.post("/api/ai")
async def ai_endpoint(request: Request):
    """
    Accepts a user question and returns a placeholder AI response.
    """
    body = await request.json()
    user_question = body.get("question", "")
    
    # Mendapatkan respons dari logika AI
    response = generate_ai_response(user_question)
    return {"answer": response}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
