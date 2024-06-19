/* eslint-disable react/jsx-key */

import { Header } from '../header/component';
import { Footer } from '../footer/component';

import { ThemeContextProvider } from '../../context/theme/provider';
import { UserContextProvider } from '../../context/user/provider';
import { store } from '../../redux';
import { Provider } from 'react-redux';

import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <div>
                        <div
                            id="modal_container"
                            className={styles['modal-container']}
                        />
                        <div className={styles['layout-body']}>
                            <Header />
                            <div>
                                <Outlet />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}