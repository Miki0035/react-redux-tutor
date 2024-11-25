import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaBase: 100,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBase--;
    },
    customer_choice: (state, action) => {
        state.pizzaBase -= action.payload

    }
  },
});
export const { pizza_order, customer_choice } = pizzaSlice.actions;

export default pizzaSlice.reducer;
