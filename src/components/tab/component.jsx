import { Link } from 'react-router-dom';
import { Button } from '../button/component';

export const Tab = ({ title, to }) => {
    return (
        <Link to={to}>
            {title}
        </Link>
    );
};