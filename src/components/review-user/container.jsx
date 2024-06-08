/* eslint-disable react/jsx-key */

import { useSelector } from 'react-redux';
import { ReviewUser } from './component';
import { selectUserById } from '../../redux/entities/user/selectors'

export const ReviewUserContainer = ({ id, ...props }) => {
    const user = useSelector((state) => selectUserById(state, id));

    if (!user) return;

    return <ReviewUser {...props} user={user} />;
};