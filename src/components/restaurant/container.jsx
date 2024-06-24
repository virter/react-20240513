/* eslint-disable react/jsx-key */

import { useParams } from 'react-router-dom';
import { useGetRestaurantByIdQuery } from '../../redux/service/api';
import { Loader } from '../loader/component';
import { Restaurant } from './component';

export const RestaurantContainer = () => {
    const { restaurantId } = useParams();

    const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(restaurantId);

    if (isLoading) {
        return <Loader size='100' />;
    }

    if (!restaurant) {
        return <div>No restaurant</div>;
    }

    return <Restaurant restaurant={restaurant} />;
};
