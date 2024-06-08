import { createPortal } from 'react-dom';
import { Button } from '../button/component';

import styles from './styles.module.scss';

export const Modal = ({ onClose, children }) => {
    return createPortal(
        <>
            <div
                onClick={onClose}
                className={styles.shadow}
            />
            <div className={styles.modal}>
                <Button onClick={onClose}>X</Button>
                {children}
            </div>
        </>,
        document.getElementById('modal_container')
    );
}