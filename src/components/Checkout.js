import React from "react";
import classes from "./Checkout.module.css";

function Checkout() {
  return (
    <div className={classes.checkout}>
      <section className={classes.checkout__left}>
        <img
          className={classes.checkout__add}
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="Ad"
        />
        <h2 className={classes.checkout__title}>
            Your Shopping Basket
        </h2>
      </section>
      <section className={classes.checkout__right}>
      <h2>The Sub Total Will Go Here</h2>
      </section>
    </div>
  );
}

export default Checkout;
