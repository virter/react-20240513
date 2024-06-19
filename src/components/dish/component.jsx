/* eslint-disable react/jsx-key */

import { Counter } from '../counter/component';
import { useCount } from '../../hooks/use-count';

const initialValue = 0;

export const Dish = ({ dish }) => {
    const { count, increment, decrement } = useCount({ initialValue: initialValue });

    const { name, price, ingredients } = dish;
    if (!name) return;

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: <b>{price} $</b></p>

            <h4>Ingredients</h4>
            <ul>
            { ingredients.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <p>Count: <Counter value={count} increment={increment} decrement={decrement} /></p>
            <p>Total: <b>{count * dish.price} $</b></p>
        </div>
    );
};