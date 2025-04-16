# app/utils.py
def generate_response(status_code: int, data: dict) -> dict:
    """
    Helper function untuk membuat format respons yang konsisten.
    """
    return {
        "statusCode": status_code,
        "data": data
    }
