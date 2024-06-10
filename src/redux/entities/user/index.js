import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers as items } from '../../../constants/normalized-mock';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: items.reduce((entities, item) => {
            entities[item.id] = item;
            return entities;
        }, {}),
        ids: items.map(({ id }) => id)
    }
});