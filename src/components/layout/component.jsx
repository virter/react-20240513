/* eslint-disable react/jsx-key */

import { Header } from '../header/component';
import { Footer } from '../footer/component';

import styles from './styles.module.scss';

export const Layout = ({ children }) => {
    return (
        <div>
            <div
                id="modal_container"
                className={styles['modal-container']}
            />
            <div className={styles['layout-body']}>
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}