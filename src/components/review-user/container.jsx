import { useGetUsersQuery } from '../../redux/service/api';
import { selectEntityFromResult } from '../../redux/service/api/selectors';
import { ReviewUser } from './component';

export const ReviewUserContainer = ({ id, ...props }) => {
    const { data: user } = useGetUsersQuery(undefined, {
        selectFromResult: selectEntityFromResult(id)
    });

    if (!user) return;

    return <ReviewUser {...props} user={user} />;
};