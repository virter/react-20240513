/* eslint-disable react/jsx-key */

import { Review } from './component';

export const ReviewContainer = ({ review, ...props }) => {
    return <Review {...props} review={review} />;
};