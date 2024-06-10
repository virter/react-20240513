import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews as items } from '../../../constants/normalized-mock';

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        entities: items.reduce((entities, item) => {
            entities[item.id] = item;
            return entities;
        }, {}),
        ids: items.map(({ id }) => id)
    }
});