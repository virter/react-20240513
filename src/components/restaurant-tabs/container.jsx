/* eslint-disable react/jsx-key */

import { useGetRestaurantsQuery } from '../../redux/service/api';
import { Loader } from '../loader/component';
import { RestaurantTabs } from './component';

export const RestaurantTabsContainer = () => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery();

    if (isLoading) {
        return <Loader size='100' />;
    }

    if (!restaurants?.length) {
        return <div>No restaurants</div>;
    }

    return (
        <RestaurantTabs restaurants={restaurants} />
    );
}