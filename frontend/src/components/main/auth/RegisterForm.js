import { useState } from 'react';
import { registerUser } from '../../../util/requests';

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const user = { username, password, confirmation };
        registerUser(JSON.stringify(user)).then(res => {
            setUsername('');
            setPassword('');
            setConfirmation('');
        }).catch(err => {
            console.error(err);
            console.log(err.response.data);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" autoFocus autoComplete="off" placeholder="Username"
                    value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="password" autoComplete="off" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="password" autoComplete="off" placeholder="Confirm password"
                    value={confirmation} onChange={e => setConfirmation(e.target.value)} />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}