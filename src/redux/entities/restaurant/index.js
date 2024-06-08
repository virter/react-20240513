import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants as items } from '../../../constants/normalized-mock';

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        entities: items.reduce((entities, item) => {
            entities[item.id] = item;
            return entities;
        }, {}),
        ids: items.map(({ id }) => id)
    }
});