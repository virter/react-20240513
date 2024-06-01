/* eslint-disable react/jsx-key */

import { useState } from "react";

import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurant-tabs/component";


export const Restaurants = ({ restaurants }) => {
    const [ activeRestaurantIndex, setActiveRestaurantIndex ] = useState(0);
    const activeRestaurant = restaurants[activeRestaurantIndex];

    return <div>
        <RestaurantTabs
            activeTabIndex={activeRestaurantIndex}
            restaurants={restaurants}
            onTabClick={setActiveRestaurantIndex}
        />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
        <Restaurant restaurant={activeRestaurant} />
    </div>;
};