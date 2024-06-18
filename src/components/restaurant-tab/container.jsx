import { Tab } from '../tab/component';

export const RestaurantTabContainer = ({ title, onClick, isActive }) => {
    return <Tab title={title} onClick={onClick} isActive={isActive} />
};