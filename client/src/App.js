import React, {useState} from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import {
  Route,
  Link
} from "react-router-dom";

import RegisterForm from './components/RegisterForm'
import HomepageLayout from './components/Home'
import Profile from './components/Profile'
import PrivateRoute from './components/config/PrivateRoute'


function App() {
  const [storedToken, setToken] = useLocalStorage("token")
  return (
    <div className="App" style={{ padding: 30 }}>
      
      <div>
        <Link to="/">Login</Link>
        <Link to="/register" >Register</Link>
      </div>
      <Route exact path="/" component={HomepageLayout} />
      <Route path='/register'  render={(props) => <RegisterForm {...props} setToken={setToken} /> }/>
      <PrivateRoute exact path='/profile' component={Profile}/>
    </div>
  );
}

export default App;
