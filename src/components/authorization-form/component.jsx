import { useState } from 'react';
import { Button } from '../button/component';

import styles from './styles.module.scss';

export const AuthorizationForm = ({ onLogin, onCancel }) => {
    const [ name, setName ] = useState('');

    return (
        <div className={styles.root}>
            <input
                className={styles.login}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <div className={styles.controls}>
                <Button onClick={onCancel}>Cancel</Button>
                <Button
                    onClick={() => {
                        onLogin(name);
                        setName('');
                    }
                }>
                    Login
                </Button>
            </div>
        </div>
    );
}