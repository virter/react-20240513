import { Link, useParams } from "react-router-dom";
import { NewReviewFormContainer } from "../components/new-review-form/container";
import { ReviewsContainer } from "../components/reviews/container";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    return (
        <div>
            <Link to={`/restaurants/${restaurantId}`}>Назад в ресторан</Link>
            <ReviewsContainer restaurantId={restaurantId} />
            <NewReviewFormContainer restaurantId={restaurantId} />
        </div>
    );
}