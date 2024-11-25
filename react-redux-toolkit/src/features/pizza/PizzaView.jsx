import { useDispatch, useSelector } from "react-redux";
import { customer_choice, pizza_order } from "./pizzaSlice";
import { useState } from "react";

const PizzaView = () => {
  const [number, setNumber] = useState(1);

  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of pizza base - {pizzaBase}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => dispatch(customer_choice(number))}>
        Customer Choice
      </button>
      <button onClick={() => dispatch(pizza_order())}>Order Pizza</button>
    </div>
  );
};

export default PizzaView;
