/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
    if (menu.length === 0) return;

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                { menu.map((item, index) => !!item.name ? (
                    <li key={index}>
                        <Dish dish={item} />
                    </li>
                ) : null ) }
            </ul>
        </div>
    );
};