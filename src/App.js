import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

//COMPONENTS
import Dashboard from './components/dashboard';
import Auth from './components/Auth';



const PrivateRoute = ({ Component, isAuth }) => (
  <Route render={(props) => (
    isAuth ? <Component {...props} /> : <Redirect to="/" />
  )} />
)



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  handleLogin = ({email, password}) => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (user.email === email && user.password === password) {
      this.setState({
        isAuth: true
      })
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path='/'
            exact
            render={(props) => <Auth {...props} handleLogin={this.handleLogin}/>}
          />
          <PrivateRoute path="/dashboard" Component={Dashboard} isAuth={this.state.isAuth} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
