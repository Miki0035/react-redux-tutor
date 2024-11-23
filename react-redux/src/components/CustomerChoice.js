import React, { useState } from "react";
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
    orderBurger: (number) => dispatch(orderBurger(number)),
  };
};

const CustomerChoice = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <h2>Number of Burger Buns Available -{props.burgerBuns}</h2>
      <input
        className="input-feild"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter your number"
      />
      <button className="btn" onClick={() => props.orderBurger(number)}>
        Order Burger
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
