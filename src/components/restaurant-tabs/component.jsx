/* eslint-disable react/jsx-key */

import { RestaurantTabContainer } from '../restaurant-tab/container';

export const RestaurantTabs = ({
    restaurants,
    activeRestaurantId,
    onTabClick
}) => {
    return (
        <div>
            {restaurants.map(({ name, id }) => (
                <RestaurantTabContainer
                    key={id}
                    title={name}
                    onClick={() => onTabClick(id)}
                    isActive={activeRestaurantId === id}
                />
            ))}
        </div> 
    );
}