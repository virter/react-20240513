/* eslint-disable react/jsx-key */

//import { ScrollProgressBar } from '../../scroll-progress-bar/component';
import { Link } from 'react-router-dom';
import { AuthorizationButton } from '../authorization-button/component';
import { ThemeToggler } from '../theme-toggler/component';

import styles from './styles.module.scss';

export const Header = ({ }) => {
    return (
        <header className={styles.root} >
            {/* <ScrollProgressBar /> */}
            <AuthorizationButton />
            <ThemeToggler />
            <div><Link to="/">Home</Link></div>
            <div><Link to="/restaurants">Restaurants</Link></div>
        </header>
    );
};