import { Link } from 'react-router-dom';
import { Dish } from '../dish/component';

export const Dishes = ({ dishes }) => {
    if (!dishes?.length) return;

    return (
        <div>
            { dishes.map((dish, index) => {
                const { id, name } = dish;
                return (
                    <div key={index}>
                        <Link to={`/dish/${id}`}>
                            {name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}