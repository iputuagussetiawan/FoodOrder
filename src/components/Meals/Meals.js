import React, { Component } from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react'

export class Meals extends Component {
  render() {
    return (
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
  }
}

export default Meals