import { useParams } from 'react-router-dom';
import { useGetDishByIdQuery } from '../../redux/service/api';
import { Dish } from './component';
import { Loader } from '../loader/component';

export const DishContainer = ({ ...props }) => {
    const { dishId } = useParams();

    const { data: dish, isLoading } = useGetDishByIdQuery(dishId);

    if (isLoading) {
        return <Loader size='100' />;
    }

    if (!dish) {
        return <div>No dish</div>;
    }

    return <Dish {...props} dish={dish} />;
};