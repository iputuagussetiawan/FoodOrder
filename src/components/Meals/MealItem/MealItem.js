import clasess from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem =props =>{
    const price=`$${props.price.toFixed(2)}`
    return (
        <li className={clasess.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={clasess.description}>{props.description}</div>
                <div className={clasess.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}></MealItemForm>
            </div>
        </li>
    )
}
export default MealItem