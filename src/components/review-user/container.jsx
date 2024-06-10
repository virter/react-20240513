/* eslint-disable react/jsx-key */

import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/user/selectors'
import { ReviewUser } from './component';

export const ReviewUserContainer = ({ id, ...props }) => {
    const user = useSelector((state) => selectUserById(state, id));
    return <ReviewUser {...props} user={user} />;
};