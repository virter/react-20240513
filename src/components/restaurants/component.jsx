/* eslint-disable react/jsx-key */

import { useState } from 'react';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';

export const Restaurants = () => {
    return <div>
        <RestaurantTabsContainer/>
        {/*{activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}*/}
    </div>;
};