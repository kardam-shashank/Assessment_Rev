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

    formValidation = () => {
        let submittedValue = this.state.loginData;

        let email = submittedValue.email;
        let password = submittedValue.password;

        let name = submittedValue.name;

        if (name.length < 0) {
            console.log("Name is empty");
        }
      
    }


    handleChnage =(e, fieldName)=>{
        let loginData = this.state.loginData;
        loginData[fieldName]= e.target.value;
        this.setState({loginData:loginData});
    }

    render() {
        return (
            <div  className="wrap">
                <h1>Login</h1>
                <label for="email"><b>Email</b></label>
                <input className="input" type="text" placeholder="Enter Email" name="email" required onChange={(e)=>this.handleChnage(e, 'email')}/>
                <br />
                <label for="psw"><b>Password</b></label>
                <input className="input" type="password" placeholder="Enter Password" name="password" required onChange={(e)=>this.handleChnage(e, 'password')}/><br />
                <Link to="/dashboard" onClick={()=>this.props.handleLogin(this.state.loginData)}><button type="submit" className="signupbtn" className="button">Log in</button></Link>
            </div>
        )
    }
}

export default Login;