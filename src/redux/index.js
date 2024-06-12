import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';

export const store = configureStore({
    reducer: combineSlices(
        dishSlice,
        restaurantSlice,
        reviewSlice,
        userSlice
    ),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});