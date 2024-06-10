/* eslint-disable react/jsx-key */

import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    return (
        <div>
            <h2>{name}</h2>
            <Menu dishIds={menu} />
            <Reviews reviewIds={reviews} />
        </div>
    );
};
