import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPizza } from "./redux";

const HooksContainer = () => {
    // mapStateToProps
    const pizzaBase = useSelector((state) => state.pizzaBase )
    const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Number of Pizza Base Available - 
        {pizzaBase}
      </h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>Order Pizza</button>
    </div>
  );
};

export default HooksContainer;
