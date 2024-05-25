/* eslint-disable react/jsx-key */
import { useState } from "react";

export const Dish = ({ dish }) => {
    const [ count, setCount ] = useState(0);

    const increment = () => {
        if (count === 5) return;
        setCount(count + 1);
    };

    const decrement = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    const { name } = dish;

    if (!name) return;

    return <div>
        <span>{name}</span>
        <br/>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>;
};