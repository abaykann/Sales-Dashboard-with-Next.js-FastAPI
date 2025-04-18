
# Project Setup Instructions

This document outlines the steps to set up and run both the **backend** and **frontend** parts of the application.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Python 3.x** for the backend
- **Node.js** and **npm** for the frontend

## 1. Backend Setup

Follow these steps to set up the backend of the project:

### Step 1: Create a Virtual Environment

To isolate the backend dependencies, you'll need to create a virtual environment. Run the following command:

```bash
python3 -m venv venv
```

### Step 2: Activate the Virtual Environment

- **On macOS/Linux**:
    ```bash
    source venv/bin/activate
    ```
- **On Windows**:
    ```bash
    venv\Scripts\activate
    ```

### Step 3: Install Backend Dependencies

With the virtual environment activated, install the required Python dependencies from the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

### Step 4: Run the Backend Server

After the dependencies are installed, run the backend server using **Uvicorn**:

```bash
uvicorn app.main:app --reload
```

This will start the backend server, which will be available at `http://localhost:8000`.

> **Note**: The backend server is set to only accept requests from the frontend running on **`http://localhost:3000`**. If your frontend is running on a different port, you may need to adjust the CORS settings in the backend configuration.

## 2. Frontend Setup

Follow these steps to set up the frontend of the project:

### Step 1: Install Frontend Dependencies

Navigate to the frontend project folder and run the following command to install the required Node.js dependencies:

```bash
npm install
```

### Step 2: Start the Frontend Development Server

Once the dependencies are installed, run the frontend development server:

```bash
npm run dev
```

This will start the frontend server, which will be available at `http://localhost:3000`.

> **Note**: Make sure that the frontend is running on **`http://localhost:3000`**. The backend only accepts requests from this port.

1. **Backend**:
   - Create and activate the virtual environment: `python3 -m venv venv`, `source venv/bin/activate`
   - Install dependencies: `pip install -r requirements.txt`
   - Run the backend server: `uvicorn app.main:app --reload`

2. **Frontend**:
   - Install dependencies: `npm install`
   - Start the frontend server: `npm run dev`

Make sure the frontend is running on **port 3000** so that it can communicate with the backend, which only accepts requests from that port.

--- 

This **README.md** provides all the necessary steps to get both the backend and frontend running and working together!
