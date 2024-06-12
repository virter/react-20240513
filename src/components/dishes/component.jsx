import { DishContainer } from '../dish/container';

export const Dishes = ({ dishIds }) => {
    if (!dishIds) return;

    return (
        <div>
            { dishIds.map((id, index) => (
                <DishContainer key={index} id={id} />
            ))}
        </div>
    );
}