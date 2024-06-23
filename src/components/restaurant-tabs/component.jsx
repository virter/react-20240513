/* eslint-disable react/jsx-key */

import { useSearchParams } from 'react-router-dom';
import { Tab } from '../tab/component';

import styles from './styles.module.scss';

export const RestaurantTabs = ({
    restaurants
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get('search') || '';

    return (
        <div>
            <div className={styles.tabs_containe}>
                <input
                    value={searchValue}
                    onChange={(event) => setSearchParams({ search: event.target.value })}
                    placeholder='Фильтр'
                />
                <div className={styles.tabs_body}>
                    {restaurants
                        .filter(({name}) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
                        .map(({ name, id }) => (
                        <Tab
                            key={id}
                            title={name}
                            to={`/restaurants/${id}`}
                            position='menu'
                        />
                    ))}
                </div>
            </div>
        </div> 
    );
}