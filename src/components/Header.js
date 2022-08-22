import React from "react";
import classes from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <header className={classes.header}>
      <img
      className={classes.header__logo}
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon_Logo"
      />
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
       <SearchIcon className={classes.header__searchIcon}/>
      </div>
      <nav className={classes.header__nav}>
        <div className={classes.header__option}>
          <span className={classes.header__optionLine1}>Hello</span>
          <span className={classes.header__optionLine2}>Sign in</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLine1}>Returns</span>
          <span className={classes.header__optionLine2}>& Orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLine1}>Your</span>
          <span className={classes.header__optionLine2}>Prime</span>
        </div>
        <div className={classes.header__optionBasket}>
        <ShoppingBasketIcon/>
        <span className={`${classes.header__optionLine2} ${classes.header__basketCount}`}>0</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
