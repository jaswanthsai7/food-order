import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const item = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {item}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.hideCartHandler}>Close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
}
