import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSalesReps } from "./thunks";

type Deal = {
  client: string;
  value: number;
  status: string;
};

type Client = {
  name: string;
  industry: string;
  contact: string;
};

export type SalesRep = {
  id: number;
  name: string;
  role: string;
  region: string;
  skills: string[];
  deals: Deal[];
  clients: Client[];
};

type SalesState = {
  salesReps: SalesRep[];
  loading: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: SalesState = {
  salesReps: [],
  loading: "idle",
  error: null,
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesReps.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchSalesReps.fulfilled,
        (state, action: PayloadAction<SalesRep[]>) => {
          state.loading = "idle";
          state.salesReps = action.payload;
        }
      )
      .addCase(fetchSalesReps.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export const selectSalesReps = (state: { sales: SalesState }) =>
  state.sales.salesReps;
export const selectSalesLoading = (state: { sales: SalesState }) =>
  state.sales.loading;
export const selectSalesError = (state: { sales: SalesState }) =>
  state.sales.error;

export default salesSlice.reducer;
