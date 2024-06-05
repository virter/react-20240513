import { createPortal } from 'react-dom';
import { Button } from '../button/component';

export const Modal = ({ onClose, children }) => {
    return createPortal(
        <>
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    left: '50vw',
                    top: '50vh',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    zIndex: 2
                }}
            >
                <Button onClick={onClose}>X</Button>
                {children}
            </div>
        </>,
        document.getElementById('modal_container')
    );
}