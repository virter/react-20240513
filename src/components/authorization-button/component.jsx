import { useCallback, useState } from 'react';
import { useUser } from '../../context/user/hooks';
import { Button } from '../button/component';
import { Modal } from '../modal/component';
import { AuthorizationForm } from '../authorization-form/component';

export const AuthorizationButton = () => {
    const { user, login, logout } = useUser();
    const [ isOpen, setIsOpen ] = useState(false);

    const handleClose = useCallback(
        () => {
            setIsOpen(false);
        },
        []
    );

    const handleLogin = useCallback(
        (name) => {
            login(name);
            handleClose();
        },
        [login, handleClose]
    );

    return (
        <div>
            <span>{user}</span>
            {user ? (
                <Button onClick={logout}>Logout</Button>
            ) : (
                <Button onClick={() => setIsOpen(true)}>Login</Button>
            )}
            {isOpen && (
                <Modal onClose={handleClose}>
                    <AuthorizationForm onLogin={handleLogin} onCancel={handleClose} />
                </Modal>
            )}
        </div>
    );
};