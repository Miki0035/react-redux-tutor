const store = require('./app/store')
const { pizzaActions } = require('./features/pizza/pizzaSlice')
const { burgerActions } = require('./features/burger/burgerSlice')
const { fetchProducts } = require('./features/product/productSlice')

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
    // console.log('Update State', store.getState())
})
store.dispatch(pizzaActions.pizza_order())
store.dispatch(burgerActions.burger_order())
store.dispatch(burgerActions.burger_order())

// product
store.dispatch(fetchProducts()).then(() => {
    console.log('Final State after Update', store.getState())
})
unsubscribe();