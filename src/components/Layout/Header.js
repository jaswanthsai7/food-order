import React, { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"; 

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Meals</h2>
        <HeaderCartButton onClick={props.showCartHandler}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of meals"/>
      </div>
    </Fragment>
  );
}
