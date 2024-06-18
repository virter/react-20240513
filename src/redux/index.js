import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';
import { apiService } from './service/api';

export const store = configureStore({
    reducer: combineSlices(
        dishSlice,
        restaurantSlice,
        reviewSlice,
        userSlice,
        apiService
    ),
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiService.middleware)
});