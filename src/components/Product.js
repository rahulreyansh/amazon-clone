import { PeopleSharp } from "@mui/icons-material";
import React from "react";
import classes from "./Product.module.css";

function Product(props) {
  console.log(props);
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{props.title}</p>
        <p className={classes.product__price}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.product__rating}>
        {Array(props.rating).fill().map((_, i)=>
          <p id={Math.random()}>⭐</p>
        )}
        </div>
      </div>
      <img
        src={props.image}
        alt="Product__Image"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
