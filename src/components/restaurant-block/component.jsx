/* eslint-disable react/jsx-key */
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const RestaurantBlock = ({ restaurant }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
};
