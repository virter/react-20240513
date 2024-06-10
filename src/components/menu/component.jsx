/* eslint-disable react/jsx-key */

import { DishContainer } from '../dish/container';

export const Menu = ({ dishIds }) => {
    if (dishIds.length === 0) return;

    return (
        <div>
            <h3>Menu</h3>
            <div>
                { dishIds.map((id, index) => (
                    <DishContainer key={index} id={id} />
                ))}
            </div>
        </div>
    );
};