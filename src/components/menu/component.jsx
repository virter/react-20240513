/* eslint-disable react/jsx-key */

import { Dishes } from '../dishes/component';

export const Menu = ({ dishIds }) => {
    if (!dishIds) return;
    return (
        <div>
            <h3>Menu</h3>
            <Dishes dishIds={dishIds} />;
        </div>
    );
};