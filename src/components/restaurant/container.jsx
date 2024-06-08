/* eslint-disable react/jsx-key */

import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { Restaurant } from './component';

export const RestaurantContainer = ({ activeRestaurantId }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, activeRestaurantId));
    if (!restaurant) return <div>No restaurant</div>;

    return <Restaurant restaurant={restaurant} />;
};
