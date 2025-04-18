import os
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = os.getenv("GEMINI_API_URL")

def generate_ai_response(user_question: str) -> dict:
    body = {
        "contents": [{
            "parts": [{"text": user_question}]
        }]
    }

    try:
        response = requests.post(
            GEMINI_API_URL,
            params={"key": GEMINI_API_KEY},
            json=body,
            headers={"Content-Type": "application/json"},
            verify=False
        )

        if response.status_code != 200:
            return {"answer": f"Error: API request failed with status code {response.status_code}"}

        response_data = response.json()
        candidates = response_data.get("candidates", [])
        if not candidates:
            return {"answer": "Error: No valid answer returned from Gemini API."}

        answer = candidates[0]["content"]["parts"][0]["text"].strip()
        return {"yourQuestion": user_question, "answer": answer}

    except requests.exceptions.RequestException as e:
        return {"answer": f"Request error: {str(e)}"}
    except Exception as e:
        return {"answer": f"Error occurred: {str(e)}"}
