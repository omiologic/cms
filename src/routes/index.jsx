import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
/* Common Components */
// import { AppContainer, Grid, Row, Col } from 'APP/src/bootstrap/bootstrap.index'

// import Sidebar from '../common/Sidebar';
// import Header from '../common/Header';
// import Footer from '../common/Footer';

import NotFound from '../components/NotFound';

import { whoami } from '../reducers/auth';

/* Pages */
import Root from './Root/Root';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import Dashboard from './Dashboard/Dashboard';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={props.initializeData}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/admin" component={Admin} onEnter={props.initializeData}>
      <Route path="/admin/dashboard" component={Dashboard} />      
      <IndexRoute component={Dashboard} />  
    </Route>
  </Router>
);

const mapProps = null;
const mapDispatch = dispatch => {
  return {
    initializeData: () => {      
      dispatch(whoami());
    }
  }
};

export default connect(mapProps, mapDispatch)(Routes);
