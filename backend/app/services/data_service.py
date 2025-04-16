# app/services/data_service.py
import json

def load_data():
    """Memuat data dummy dari file JSON."""
    with open('dummyData.json', 'r') as f:
        return json.load(f)
