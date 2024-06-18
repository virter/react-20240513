import { Dish } from '../dish/component';

export const Dishes = ({ dishes }) => {
    if (!dishes?.length) return;

    return (
        <div>
            { dishes.map((dish, index) => (
                <Dish key={index} dish={dish} />
            ))}
        </div>
    );
}