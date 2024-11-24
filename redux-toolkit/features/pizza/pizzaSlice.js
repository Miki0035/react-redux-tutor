const createSlice = require("@reduxjs/toolkit").createSlice;
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
  },
});
console.log(pizzaSlice)
module.exports = pizzaSlice.reducer;    // Default export for reducer
module.exports.pizzaActions = pizzaSlice.actions;   // named export for action creators

