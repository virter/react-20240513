/* eslint-disable react/jsx-key */

/*
Почему выкидывает warning в консоли, не смотря на eslint-disable react/jsx-key?

Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Reviews`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at Reviews (http://localhost:5173/src/components/reviews/component.jsx?t=1716632432208:18:27)
    at div
    at Restaurant (http://localhost:5173/src/components/restaurant/component.jsx?t=1716632432208:19:30)
    at div
    at Restaurants (http://localhost:5173/src/components/restaurants/component.jsx?t=1716632432208:21:31)
    at div
    at Layout (http://localhost:5173/src/components/layout/component.jsx:19:26)
*/

import { ReviewItem } from "../review-item/component";

export const Reviews = ({ reviews }) => {
    if (!reviews.length === 0) return;

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                { reviews.map((item) => !!item.text ? (
                    <li>
                        <ReviewItem item={item} />
                    </li>
                ) : null)}
            </ul>
        </div>
    );
};