import { useParams } from "react-router-dom";
import { NewReviewFormContainer } from "../components/new-review-form/container";
import { ReviewsContainer } from "../components/reviews/container";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    return (
        <div>
            <ReviewsContainer restaurantId={restaurantId} />
            <NewReviewFormContainer restaurantId={restaurantId} />
        </div>
    );
}