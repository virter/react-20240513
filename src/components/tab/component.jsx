import { NavLink } from 'react-router-dom';
import classsNames from 'classnames';
import styles from './styles.module.scss';

export const Tab = ({ title, to, position = '' }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classsNames({
                    [styles.link]: position === 'menu',
                    [styles.active]: position === 'menu' && isActive,
                })
            }
        >
            {title}
        </NavLink>
    );
};