import { Dishes } from './component';

export const DishesContainer = ({ dishIds }) => {
    if (!dishIds) return;
    return <Dishes dishIds={dishIds} />;
}