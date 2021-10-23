import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
    return (
        <Switch>
            <Route path={ '/login' } component={ Login } />
            <Route path={ '/register' } component={ Register } />
            <Route path={ '/' }>
                <Redirect to='/login' />
            </Route>
        </Switch>
    )
}

export default Routes;
