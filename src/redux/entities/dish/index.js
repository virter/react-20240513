import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes as items } from '../../../constants/normalized-mock';

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: items.reduce((entities, item) => {
            entities[item.id] = item;
            return entities;
        }, {}),
        ids: items.map(({ id }) => id)
    }
});