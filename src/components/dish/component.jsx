/* eslint-disable react/jsx-key */

import { Counter } from '../counter/component';
import { useCount } from '../hooks/use-count';

const initialValue = 0;

export const Dish = ({ dish }) => {
    const { count, increment, decrement } = useCount({ initialValue: initialValue });

    const { name } = dish;
    if (!name) return;

    return <div>
        <span>{name}</span>
        <Counter value={count} increment={increment} decrement={decrement} />
        {count * dish.price}
    </div>;
};