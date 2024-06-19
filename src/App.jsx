import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home';
import { RestaurantsPage } from './pages/restaurants';
import { RestaurantPage } from './pages/restaurant';
import { MenuPage } from './pages/menu';
import { ReviewsPage } from './pages/reviews';
import { DishPage } from './pages/dish';
import { Layout } from './components/layout/component';

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'restaurants', element: <RestaurantsPage /> },
            { path: 'restaurants/:restaurantId', element: <RestaurantPage /> },
            { path: 'restaurants/:restaurantId/menu', element: <MenuPage /> },
            { path: 'restaurants/:restaurantId/reviews', element: <ReviewsPage /> },
            { path: 'dish/:dishId', element: <DishPage /> },
        ]
    }
]);

export const App = () => {
    return <RouterProvider router={router} />;
}