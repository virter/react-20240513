/* eslint-disable react/jsx-key */

import { useState } from 'react';
import { Counter } from '../counter/component';

const initialValue = 0;

const useCount = () => {
    const [ count , setCount ] = useState(initialValue);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return { count, increment, decrement };
};

export const Dish = ({ dish }) => {
    const { count, increment, decrement } = useCount();

    const { name } = dish;
    if (!name) return;

    return <div>
        <span>{name}</span>
        <Counter value={count} increment={increment} decrement={decrement} />
        {count * dish.price}
    </div>;
};