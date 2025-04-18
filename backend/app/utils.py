# app/utils.py
def generate_response(status_code: int, data: dict) -> dict:

    return {
        "statusCode": status_code,
        "data": data
    }
