/* eslint-disable react/jsx-key */

import { useState } from 'react';
import { Counter } from '../counter/component';

const initialValue = 0;

const useCount = () => {
    const [ count , setCount ] = useState(initialValue);
    return { count, setCount };
};

export const Dish = ({ dish }) => {
    const { count, setCount } = useCount();

    const { name } = dish;
    if (!name) return;

    return <div>
        <span>{name}</span>
        <Counter value={count} onChange={setCount} />
        {count * dish.price}
    </div>;
};