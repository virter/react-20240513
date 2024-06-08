/* eslint-disable react/jsx-key */

import { DishesContainer } from '../dishes/container';

export const Menu = ({ dishIds }) => {
    if (!dishIds) return;
    return (
        <div>
            <h3>Menu</h3>
            <DishesContainer dishIds={dishIds} />
        </div>
    );
};