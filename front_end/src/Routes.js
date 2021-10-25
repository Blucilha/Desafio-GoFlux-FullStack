import { Switch, Route, Redirect } from 'react-router-dom';
import ShipperProvider from './api/ShipperProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterOffer from './pages/RegisterOffer';
import Shipper from './pages/Shipper';

function Routes() {
    return (
        <Switch>
            <Route path={ '/login' } component={ Login } />
            <Route exact path={ '/' }>
                <Redirect to='/login' />
            </Route>
            <ShipperProvider>
                <Route exact path={ '/shipper/:id' } component={ Shipper } />
                <Route exact path={ '/shipper/register-offer/:id' } component={ RegisterOffer } />
            </ShipperProvider>
            <Route path={ '/register' } component={ Register } />
        </Switch>
    )
}

export default Routes;
