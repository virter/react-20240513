/* eslint-disable react/jsx-key */

import { NewReviewForm } from '../new-review-form/component';
import { ReviewContainer } from '../review/container';

export const Reviews = ({ reviewIds }) => {
    if (!reviewIds.length === 0) return;

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                { reviewIds.map((id, index) => (
                    <li key={index}>
                        <ReviewContainer id={id} />
                    </li>
                ))}
            </ul>
            <NewReviewForm />
        </div>
    );
};