import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Shipper from './pages/Shipper';

function Routes() {
    return (
        <Switch>
            <Route path={ '/login' } component={ Login } />
            <Route path={ '/register' } component={ Register } />
            <Route path={ '/shipper/:id' } component={ Shipper } />
            <Route path={ '/' }>
                <Redirect to='/login' />
            </Route>
        </Switch>
    )
}

export default Routes;
