const redux = require("redux");
const ORDER_PIZZA = "ORDER_PIZZA";
const action = {
  type: ORDER_PIZZA,
  shop_name: "Pizza Shop",
};

// Action Creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza Shop",
  };
}

// Reducer
const initialState = {
  pizzaBase: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_PIZZA":
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

// STORE
// 1- Store holds application state responsiblity
const createStore = redux.createStore;
const store = createStore(reducer);

// 2 - Has getState() method
console.log("Initial State" , store.getState());

// 3- Register listeners using subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// 4- Update State via dispatch(action)
store.dispatch(orderPizza())

// 5- unsubscribe method
unsubscribe();