import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';

export const getDishesByRestaurantId = createAsyncThunk(
    'dish/getDishesByRestaurantId',
    async ({ restaurantId }) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        return response.json();
    },
    {
        condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
            if (forceRefetch) return true;

            const state = getState();
            const loadedDishes = selectDishIds(state);
            const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);

            return restaurantDishIds.some(
                (dishId) => !loadedDishes.includes(dishId)
            );
        }
    }
);

