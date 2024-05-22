/* eslint-disable react/jsx-key */
import { MenuItem } from "../menu-item/component";

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((item) => (
                    <li>
                        <MenuItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};