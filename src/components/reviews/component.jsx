/* eslint-disable react/jsx-key */
import { ReviewItem } from "../review-item/component";

export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((item) => (
                    <li>
                        <ReviewItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};