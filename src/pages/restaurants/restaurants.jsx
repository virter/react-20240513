import { Outlet } from 'react-router-dom';
import { RestaurantTabsContainer } from '../../components/restaurant-tabs/container';

import styles from './styles.module.scss';

export const RestaurantsPage = () => {
    return (
        <div className={styles.layout}>
            <RestaurantTabsContainer className={styles.menu} />
            <div className={styles.content}>
                <Outlet  />
            </div>
        </div>
    );
}