/* eslint-disable react/jsx-key */

import { Header } from '../header/component';
import { Footer } from '../footer/component';

export const Layout = ({ children }) => {
    return (
        <div>
            <div
                id="modal_container"
                style={{
                    zIndex: 2,
                    position: 'relative'
                }}
            />
            <div style={{ zIndex: 1 }}>
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}