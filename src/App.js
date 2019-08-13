import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import Order from './components/views/Order/Order';
import NewOrderContainer from './components/views/NewOrder/NewOrderContainer';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import {Provider} from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
        <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
        <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
        <Route path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrderContainer} />
        <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
        <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
        </Switch>
      </MainLayout>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
