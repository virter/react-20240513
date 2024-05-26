/* eslint-disable react/jsx-key */

import { Tab } from '../tab/component';

export const RestaurantTabs = ({ activeTabIndex, restaurants, onTabClick }) => {
    return (
        <div>
            {restaurants.map(({ name }, index) => (
                <Tab
                    key={index}
                    title={name}
                    onClick={() => onTabClick(index)}
                    isActive={activeTabIndex === index}
                />
            ))}
        </div> 
    );
}