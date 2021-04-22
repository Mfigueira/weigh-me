import '../../assets/styles/Main.css';
import { Switch, Route } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { Weighings } from './Weighings';
import { InvalidRoute } from './InvalidRoute';

export const Main = ({token, setToken, addWeighing, weighings}) => {
    return (
        <main>
            {token ? 
                <Switch>
                    <Route path='/' exact
                        render={props => (
                            <WeighingForm {...props} token={token} addWeighing={addWeighing} />
                        )}
                    />
                    <Route path='/weighings'
                        render={props => (
                            <Weighings {...props} token={token} weighings={weighings} />
                        )}
                    />
                    <Route component={InvalidRoute} />
                </Switch>
                :
                <Switch>
                    <Route path='/' exact
                        render={props => (
                            <LoginForm {...props} token={token} setToken={setToken} />
                        )}
                    />
                    <Route path='/register' exact
                        render={props => (
                            <RegisterForm {...props} token={token} setToken={setToken} />
                        )}
                    />
                    <Route component={InvalidRoute} />
                </Switch>
            }
        </main>
    );
}