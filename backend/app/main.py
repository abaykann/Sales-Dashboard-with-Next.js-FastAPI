from fastapi import FastAPI
from app.controllers.data_controller import router as data_router
from app.controllers.ai_controller import router as ai_router
from app.config import configure_app  # Untuk mengonfigurasi CORS

app = FastAPI()

# Menambahkan CORS Middleware
configure_app(app)

# Menambahkan routes
app.include_router(data_router)
app.include_router(ai_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
