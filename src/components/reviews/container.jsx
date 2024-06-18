/* eslint-disable react/jsx-key */

import { useGetReviewsByRestaurantIdQuery } from '../../redux/service/api';
import { Loader } from '../loader/component';
import { Reviews } from './component';

export const ReviewsContainer = ({ restaurantId }) => {
    const { data: reviews, isFetching } = useGetReviewsByRestaurantIdQuery(restaurantId);

    if (isFetching) {
        return <Loader size='50' />;
    }

    if (!reviews?.length) return;

    return <Reviews reviews={reviews} />;
};