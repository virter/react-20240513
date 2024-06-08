/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/entities/user/thunks/get-users';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';

export const Restaurants = () => {
    const [ activeRestaurantId, setActiveRestaurantId ] = useState();
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, [dispatch]);

    return <div>
        <RestaurantTabsContainer
            activeRestaurantId={activeRestaurantId}
            onTabClick={setActiveRestaurantId}
        />
        {activeRestaurantId && <RestaurantContainer activeRestaurantId={activeRestaurantId} />}
    </div>;
};