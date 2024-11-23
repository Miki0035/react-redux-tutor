import React from "react";
import { connect } from "react-redux";
import { orderBurger } from "./redux/burger/BurgerActions";

// state is the redux state
const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: () => dispatch(orderBurger()),
  };
};

const BurgerBox = (props) => {
  return (
    <div className="container">
      <h2>Number of Burger Buns Available -{props.burgerBuns}</h2>
      <button className="btn" onClick={props.orderBurger}>
        Order Burger
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
