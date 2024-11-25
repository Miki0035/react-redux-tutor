import { useDispatch, useSelector } from "react-redux"
import { burger_order } from "./burgerSlice";

const BurgerView = () => {
    const burgerBuns = useSelector(state => state.burger.burgerBuns)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of Burger Buns - {burgerBuns}</h2>
        <button onClick={() => dispatch(burger_order())}>Order Burger</button>
    </div>
  )
}

export default BurgerView