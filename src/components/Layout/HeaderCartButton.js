import React, { Component } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

export class HeaderCartButton extends Component {
  render() {
    return (
      <button className={classes.button}>
          <span className={classes.icon}>
              <CartIcon/>
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>3</span>
      </button>
    )
  }
}

export default HeaderCartButton