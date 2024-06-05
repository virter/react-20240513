import { useState } from 'react';
import { Button } from '../button/component';

export const AuthorizationForm = ({ onLogin, onCancel }) => {
    const [ name, setName ] = useState('');

    return (
        <div style={{ margin: '10px 0px' }}>
            <input
                style={{
                    border: '1px solid',
                    padding: '3px 5px'
                }}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <div style={{ margin: '10px 0px' }}>
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