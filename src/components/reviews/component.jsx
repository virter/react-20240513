import { Review } from '../review/component';

export const Reviews = ({ reviews }) => {
    if (!reviews?.length) return;

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                { reviews.map((review, index) => (
                    <li key={index}>
                        <Review review={review} />
                    </li>
                ))}
            </ul>
        </div>
    );
};