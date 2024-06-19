import { Link, useParams } from "react-router-dom";
import { MenuContainer } from "../components/menu/container";


export const MenuPage = () => {
    const { restaurantId } = useParams();

    return (
        <div>
            <Link to={`/restaurants/${restaurantId}`}>Назад в ресторан</Link>
            <MenuContainer restaurantId={restaurantId} />
        </div>
    );
}