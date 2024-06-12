import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewIds } from '../selectors';
import { selectRestaurantReviewIds } from '../../restaurant/selectors';

export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async ({ restaurantId }) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        return response.json();
    },
    {
        condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
            if (forceRefetch) return true;

            const state = getState();
            const loadedDishes = selectReviewIds(state);
            const restaurantDishIds = selectRestaurantReviewIds(state, restaurantId);

            return restaurantDishIds.some(
                (dishId) => !loadedDishes.includes(dishId)
            );
        }
    }
);

