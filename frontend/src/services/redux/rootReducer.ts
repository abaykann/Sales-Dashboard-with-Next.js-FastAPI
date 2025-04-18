/* Instruments */
import { counterSlice } from "./slices";
import { salesSlice } from "./slices/salesSlice/salesSlice";

export const reducer = {
  counter: counterSlice.reducer,
  sales: salesSlice.reducer,
};
