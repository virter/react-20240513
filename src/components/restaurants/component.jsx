/* eslint-disable react/jsx-key */

import { useState } from 'react';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';


export const Restaurants = () => {
    const [ activeRestaurantId, setActiveRestaurantId ] = useState(
        useSelector(selectRestaurantIds)[0]
    );

    return <div>
        <RestaurantTabsContainer
            activeRestaurantId={activeRestaurantId}
            onTabClick={setActiveRestaurantId}
        />
        <RestaurantContainer activeRestaurantId={activeRestaurantId} />
    </div>;
};