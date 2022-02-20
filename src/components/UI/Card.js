import React, { Component } from 'react'
import clasess from './Card.module.css'

export class Card extends Component {
  render() {
    return (
      <div className={clasess.card}>{this.props.children}</div>
    )
  }
}

export default Card