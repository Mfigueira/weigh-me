import { Switch, Route } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { Weighings } from './Weighings';

export const Main = ({setNewWeighing, weighings}) => {
    return (
        <main>
            <Switch>
                <Route path='/' exact
                    render={props => (
                        <WeighingForm {...props} onNewWeighing={setNewWeighing} />
                    )}
                />
                <Route path='/weighings'
                    render={props => (
                        <Weighings {...props} weighings={weighings} />
                    )}
                />
                <Route path='/login' component={LoginForm} />
                <Route path='/register' component={RegisterForm} />
            </Switch>
        </main>
    );
}