/* eslint-disable react/jsx-key */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id';
import { Menu } from './component';


export const MenuContainer = ({ restaurantId }) => {
    const dispatch = useDispatch();
    const dishIds = useSelector((state) =>
        selectRestaurantDishIds(state, restaurantId)
    );

    useEffect(() => {
        dispatch(getDishesByRestaurantId(restaurantId));    
    }, [dispatch, restaurantId]);

    return <Menu dishIds={dishIds} />
};