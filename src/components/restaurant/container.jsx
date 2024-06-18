/* eslint-disable react/jsx-key */

import { useGetRestaurantsQuery } from '../../redux/service/api';
import { selectEntityFromResult } from '../../redux/service/api/selectors';
import { Restaurant } from './component';

export const RestaurantContainer = ({ id }) => {
    const { data: restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: selectEntityFromResult(id)
    });

    if (!restaurant) {
        return <div>No restaurant</div>;
    }

    return <Restaurant restaurant={restaurant} />;
};
