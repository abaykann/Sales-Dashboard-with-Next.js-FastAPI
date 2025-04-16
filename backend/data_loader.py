import os
import json

def load_dummy_data():
    """
    Load dummy data from the dummyData.json file located outside the backend folder.
    """
    # Tentukan path file dummyData.json (mengarah ke folder yang lebih tinggi)
    base_path = os.path.dirname(os.path.abspath(__file__))  # Path ke folder backend
    file_path = os.path.join(base_path, '..', 'dummyData.json')  # Mengarah ke dummyData.json di luar folder backend

    # Memuat data dari file JSON
    with open(file_path, "r") as f:
        return json.load(f)
