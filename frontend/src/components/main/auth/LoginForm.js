import { useState } from 'react';
import { saveTokenInStorage } from '../../../util/helpers';
import { loginUser } from '../../../util/requests';

export const LoginForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const user = { username, password };
        loginUser(JSON.stringify(user)).then(res => {
            saveTokenInStorage(res.data.access_token);
            setToken(res.data.access_token);
        }).catch(err => {
            console.error(err);
            console.log(err.response.data);
        });
    }

    return (
        <section>
            <h2>Log In</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" autoFocus autoComplete="off" placeholder="Username"
                        value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <input type="password" autoComplete="off" placeholder="Password"
                        value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Log In</button>
            </form>
        </section>
    )
}