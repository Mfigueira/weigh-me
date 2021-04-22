import '../../assets/styles/Header.css';
import { Link } from 'react-router-dom';
import { removeTokenFromStorage } from '../../util/helpers';
import { useHistory } from "react-router-dom";

export const Header = ({token, setToken}) => {

    const history = useHistory();

    const logout = () => {
        removeTokenFromStorage();
        setToken(null);
        history.push('/');
    }

    return (
        <header>
            <h1><Link to="/">WeighMe</Link></h1>
            <nav>
                {token ?
                    <ul>
                        <li><Link to="/">Add</Link></li>
                        <li><Link to="/weighings">Weighings</Link></li>
                        <li><button onClick={logout}>Log Out</button></li>
                    </ul>
                    :
                    <ul>
                        <li><Link to="/">Log In</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                }
            </nav>
        </header>
    );
}