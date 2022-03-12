import React, { Component } from 'react'
import classes from './Input.module.css'

export class Input extends Component {
  render() {
    return (
      <div className={classes.input}>
          <label htmlFor={this.props.input.id}>{this.props.label}</label>
          <input {...this.props.input}/>
      </div>
    )
  }
}

export default Input