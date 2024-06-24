/* eslint-disable react/jsx-key */

import { Menu } from './component';
import { useGetDishesByRestaurantIdQuery } from '../../redux/service/api';
import { Loader } from '../loader/component';


export const MenuContainer = ({ restaurantId }) => {
    const { data: dishes, isFetching } = useGetDishesByRestaurantIdQuery(restaurantId);

    if (isFetching) {
        return <Loader size='50' />;
    }

    if (!dishes?.length) return;

    return <Menu dishes={dishes} />
};