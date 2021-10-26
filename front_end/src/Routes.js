import { Switch, Route, Redirect } from 'react-router-dom';
import ShipperProvider from './api/ShipperProvider';
import TransporterProvider from './api/TransporterProvider';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import RegisterOffer from './pages/RegisterOffer';
import Shipper from './pages/Shipper';
import Transporter from './pages/Transporter';
import ViewTrows from './pages/ViewThows';

function Routes() {
    return (
        <Switch>
            <Route path={ '/login' } component={ Login } />
            <Route path={ '/register' } component={ Register } />
            <Route path={ '/profile/:id' } component={ Profile } />
            <Route path='/shipper/register-offer/:id'>
                <ShipperProvider>
                    <RegisterOffer />
                </ShipperProvider>
            </Route>

            <Route exact path='/shipper/:id'>
                <ShipperProvider>
                    <Shipper />
                </ShipperProvider>
            </Route>

            <Route exact path='/transporter/throws/:id'>
                <TransporterProvider>
                    <ViewTrows />
                </TransporterProvider>
            </Route>

            <Route exact path='/transporter/:id'>
                <TransporterProvider>
                    <Transporter />
                </TransporterProvider>
            </Route>
            

            <Route exact path={ '/' }>
                <Redirect to='/login' />
            </Route>
        </Switch>
    )
}

export default Routes;
