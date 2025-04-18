// src/services/redux/slices/thunks.ts
import { createAppAsyncThunk } from "@/services/redux/createAppAsyncThunk";

export const fetchSalesReps = createAppAsyncThunk<any[]>(
  "sales/fetchSalesReps",
  async () => {
    const res = await fetch("http://localhost:8000/api/data");
    const data = await res.json();
    if (data.statusCode !== 200) throw new Error("API error");
    return data.data;
  }
);
