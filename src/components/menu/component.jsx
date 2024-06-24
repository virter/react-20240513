/* eslint-disable react/jsx-key */

import { Dishes } from '../dishes/component';

export const Menu = ({ dishes }) => {
    if (!dishes?.length) return;

    return (
        <div>
            <h3>Menu</h3>
            <Dishes dishes={dishes} />
        </div>
    );
};