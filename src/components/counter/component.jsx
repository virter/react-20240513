/* eslint-disable react/jsx-key */

import { Button } from '../button/component';

export const Counter = ({ value, min = 0, max = 5, increment, decrement }) => {
    return (
        <div>
            <Button onClick={() => decrement() } disabled={value === min}>
                -
            </Button>
            {value}
            <Button onClick={() => increment() } disabled={value === max}>
                +
            </Button>
        </div>
    );
};