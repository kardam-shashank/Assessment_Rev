import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginData:{
                email:'',
                password:''
            }
            
        }
    }

    handleChnage =(e, fieldName)=>{
        let loginData = this.state.loginData;
        loginData[fieldName]= e.target.value;
        this.setState({loginData:loginData});
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required onChange={(e)=>this.handleChnage(e, 'email')}/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={(e)=>this.handleChnage(e, 'password')}/>
                <Link to="/dashboard" onClick={()=>this.props.handleLogin(this.state.loginData)}><button type="submit" className="signupbtn">Log in</button></Link>
            </div>
        )
    }
}

export default Login;