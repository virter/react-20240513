import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home';
import { RestaurantsPage } from './pages/restaurants/restaurants';
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
            {
                path: '/restaurants',
                element: <RestaurantsPage />,
                children: [
                    { index: true, element: <div>Select Restaurants</div> },
                    {
                        path: ':restaurantId',
                        element: <RestaurantPage />,
                        children: [
                            { index: true, element: <Navigate to="menu" /> },
                            { path: 'menu', element: <MenuPage /> },
                            { path: 'reviews', element: <ReviewsPage /> },
                        ]
                    },
                ]
            },
            { path: 'dish/:dishId', element: <DishPage /> },
        ]
    }
]);

export const App = () => {
    return <RouterProvider router={router} />;
}