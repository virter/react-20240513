import { Dish } from './component';

export const DishContainer = ({ dish, ...props }) => {
    return <Dish {...props} dish={dish} />;
};