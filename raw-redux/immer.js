const redux = require("redux");
const createStore = redux.createStore;

const produce = require("immer").produce


const FILL_UPDATE = "FILL_UPDATE";
const initialState = {
  type: "Veggie",
  ingredients: {
    bread: "Whole Grain",
    filling: "Lettuce and Tomato",
    sauce: "Muster",
  },
};

const updateFill = (filling) => {
  return {
    type: FILL_UPDATE,
    payload: filling,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_UPDATE:
        return produce(state, (draft) => {
            draft.ingredients.filling = action.payload
        } )
    //   return {
    //     ...state,
    //     ingredients: {
    //       ...state.ingredients,
    //       filling: action.payload,
    //     },
    //   };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Update State", store.getState());
});
store.dispatch(updateFill("Grilled Veggies and Cheese"));
unsubscribe();
