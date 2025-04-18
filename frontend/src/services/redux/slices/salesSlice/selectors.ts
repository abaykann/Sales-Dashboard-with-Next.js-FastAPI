// src/services/redux/slices/selectors.ts
import type { ReduxState } from "@/services/redux";

export const selectSalesReps = (state: ReduxState) => state.sales.salesReps;
export const selectSalesLoading = (state: ReduxState) => state.sales.loading;
export const selectSalesError = (state: ReduxState) => state.sales.error;
