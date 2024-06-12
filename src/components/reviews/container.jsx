/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id';
import { Reviews } from './component';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';
import { useEffect } from 'react';

export const ReviewsContainer = ({ restaurantId }) => {
    const dispatch = useDispatch();
    const reviewIds = useSelector((state) =>
        selectRestaurantReviewIds(state, restaurantId)
    );

    useEffect(() => {
        dispatch(getReviewsByRestaurantId({ restaurantId }));
    }, [dispatch, restaurantId]);

    if (!reviewIds.length === 0) return;

    return <Reviews reviewIds={reviewIds} />;
};