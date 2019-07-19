import React from 'react';
import {
  Route,
  Link,
  Redirect
} from "react-router-dom";

import RegisterForm from './components/RegisterForm'
import Login from './components/Login'
import Profile from './components/Profile'
import PrivateRoute from './components/config/PrivateRoute'
function App() {
  return (
    <div className="App" style={{ padding: 30 }}>
      <div>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <Route exact path="/" component={Login} />
      <Route path='/register'  component={RegisterForm}/>
      <PrivateRoute exact path='/profile' component={Profile}/>
    </div>
  );
}

export default App;
