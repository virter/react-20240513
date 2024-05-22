/* eslint-disable react/jsx-key */
import { ReviewItem } from "../review-item/component";

export const Reviews = ({ reviews }) => {
    if (!reviews.length === 0) return;

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                { reviews.map((item, index) => !!item.text ? (
                    <li key={index}>
                        <ReviewItem item={item} />
                    </li>
                ) : null)}
            </ul>
        </div>
    );
};