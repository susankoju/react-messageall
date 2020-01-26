import React from 'react';

import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Message from './components/Message';
import Home from './components/Home';
import User from './components/User';
import Logout from './components/Logout';
import NotFound from './components/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      err: ""
    }
  }


  render() {

    return (
      <Router>

        <Switch>
          <Route path="/react-messageall/signup" component={Signup} />
          <Route path="/react-messageall/signin" component={Signin} />
          <Route path="/react-messageall/message" component={Message} />
          <Route path="/react-messageall/user" component={User} />
          <Route exact path="/react-messageall/logout" component={Logout} />
          <Route exact path="/react-messageall/home" component={Home} />
          <Route exact path="/react-messageall/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }

  setPage = (page) => {
    
    if (this.state.page !== page) {
      
      this.setState({
        page: page
      });
    }
  }
}

export default App;