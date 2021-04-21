import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <h1><Link to="/">WeighMe</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Add</Link></li>
                    <li><Link to="/weighings">Weighings</Link></li>
                    <li><Link to="/logout">Log Out</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </nav>
        </header>
    );
}