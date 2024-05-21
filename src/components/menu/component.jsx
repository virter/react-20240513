/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((item) => (
                    <li>
                        <Dish dish={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};