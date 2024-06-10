/* eslint-disable react/jsx-key */

import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors'
import { Review } from './component';

export const ReviewContainer = ({ id, ...props }) => {
    const review = useSelector((state) => selectReviewById(state, id));
    return <Review {...props} review={review} />;
};