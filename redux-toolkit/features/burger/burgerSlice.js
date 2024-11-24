const { pizzaActions } = require("../pizza/pizzaSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  burgerBun: 500,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBun--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pizzaActions.pizza_order, (state) => {
      state.burgerBun--;
    });
  },
  
});
module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;
