import React from "react";
import { orderPizza } from "./redux";
import { connect } from "react-redux";

// state is the redux state
const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizza.pizzaBase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza())
  } 
}

const PizzaBox = (props) => {
  console.log(props)
  return (
    <div className="container">
      <h2>Number of Pizza Base Available - 
        {props.pizzaBase}
      </h2>
      <button className="btn" onClick={props.orderPizza}>Order Pizza</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
