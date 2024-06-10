/* eslint-disable react/jsx-key */

import { RestaurantTabContainer } from '../restaurant-tab/container';

export const RestaurantTabs = ({
    restaurantIds,
    activeRestaurantId,
    onTabClick
}) => {
    return (
        <div>
            {restaurantIds.map((id, index) => (
                <RestaurantTabContainer
                    key={index}
                    id={id}
                    onClick={() => onTabClick(id)}
                    isActive={activeRestaurantId === id}
                />
            ))}
        </div> 
    );
}