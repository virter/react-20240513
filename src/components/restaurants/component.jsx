/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import { RestaurantContainer } from '../restaurant/container';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/entities/user/thunks/get-users';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

export const Restaurants = () => {
    const restaurantIds = useSelector(selectRestaurantIds);

    const [ activeRestaurantId, setActiveRestaurantId ] = useState();
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, [dispatch]);

    useEffect(() => {
        if (!activeRestaurantId && restaurantIds?.length) {
            setActiveRestaurantId(restaurantIds[0]);
        }
    }, [restaurantIds, activeRestaurantId])

    return <div>
        <RestaurantTabsContainer
            activeRestaurantId={activeRestaurantId}
            onTabClick={setActiveRestaurantId}
        />
        {activeRestaurantId && <RestaurantContainer activeRestaurantId={activeRestaurantId} />}
    </div>;
};