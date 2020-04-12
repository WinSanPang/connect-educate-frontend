import React, { Component } from 'react';
import 	{ 
  Switch, 
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './App.css';
import { isUserLoggedIn } from 'helpers';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import NotFound from './containers/NotFound';
import AskForHelp from './containers/AskForHelp'
import AskAQuestion from './containers/AskAQuestion';
import Mentors from './containers/Mentors';
import Resources from './containers/Resources/Resources';
import Contact from './containers/Contact/Contact';
import Messages from 'containers/Messages';


class App extends Component {
  render() {
    let routes = (
      <Switch>
      <Route path="/" exact={true} component={Home} />
      
      <Route path="/volunteer-with-us" component={Signup} />
      <Route path="/login" render={() => (
        // TODO: Add User Token and isAuthorised to localStorage once user has been authorised
        isUserLoggedIn() ? <Redirect to="/messages" /> : <Login/>
      )} />
      <Route path="/forgot-password" component={ForgotPassword}/>
      <Route path="/reset-password" component={ResetPassword}/>
      <Route path="/messages" render={() => (
        // TODO: Replace <NotFound/> placeholder
        isUserLoggedIn() ? <Messages/> : <Redirect to={{ pathname: '/login', state: '/messages' }}/>
      )}/>
      <Route path="/ask-for-help" component={AskForHelp} />
      <Route path="/ask-a-question" component={AskAQuestion} />
      <Route path="/our-mentors" component={Mentors}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/contact" component={Contact}/>
      <Route path="*" component={NotFound}/>
    </Switch>
    )
    
    return (
      <div className='App'>
      <Layout>
        {routes}
      </Layout>
      </div>
    );
  }
}

export default App;