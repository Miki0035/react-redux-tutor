const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

// const action = {
//   type: ORDER_PIZZA,
//   shop_name: "Pizza Shop",
// };

// Action Creator for Pizza
function orderPizza() {
  return {
    type: ORDER_PIZZA,
  };
}

// Action Creator for Burger
function orderBurger() {
  return {
    type: ORDER_BURGER,
  };
}

// intial state
const initialStateForPizza = {
  pizzaBase: 100,
};

const initialStateForBurger = {
  burgerBuns: 200,
};

const reducerPizza = (state = initialStateForPizza, action) => {
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

const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case "ORDER_BURGER":
      return {
        ...state,
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
};

// STORE
// 1- Store holds application state responsiblity
const rootReducer = combineReducer({
  pizza: reducerPizza,
  burger: reducerBurger,
});
// logger shows logs based on every state change
const store = createStore(rootReducer, applyMiddleware(logger));

// 2 - Has getState() method
console.log("Initial State", store.getState());

// 3- Register listeners using subscribe
const unsubscribe = store.subscribe(() => {});

// 4- Update State via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderBurger());

// 5- unsubscribe method
unsubscribe();
