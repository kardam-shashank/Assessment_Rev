import React, { Component } from 'react';
import {validateForm} from '../utils/util.js';

const errorObjStyle ={borderBottom: '2px solid', borderBottomColor: 'red'};

class Signup extends Component {

    constructor(props) {
        super(props);
        //local States
        this.state = {
            userSignupData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            error :'',
            isSubmitable: true,
            submitEnable: true
        }
    }



    handleSubmit = () => {
        //validating before saving
        var errors ={
            name: '',
            email:'',
            password:'',
            confirmPassword:''
        }
        let errorArray = validateForm(this.state.userSignupData);
        errorArray.forEach((error)=>{
            let k = error.key;
            errors[k]=error.status
        })
        this.setState({error: errors});
        errorArray.length ===0 && this.props.toggleLogin();
        //saving the userdata in localstorage
        window.localStorage.setItem('user', JSON.stringify(this.state.userSignupData));
       
    }

    handleInputChange = (e, fieldName) => {
        let data = this.state.userSignupData;
        data[fieldName] = e.target.value;
        this.setState({
            userSignupData: data
        })
        data = this.state.userSignupData;
        if (data.name && data.email && data.password && data.confirmPassword) {
            this.setState({
                submitEnable: false
            });
        }

    }

    render() {
        return (
            <div className="wrap">
                <h1>Signup</h1>
                <p>Please fill the form to create an account</p>
                <br />
                <label><b>Name</b></label>
                <input className="input " style={this.state.error.name ? errorObjStyle: null} type="text" placeholder="Enter Name" onChange={(e) => { this.handleInputChange(e, "name") }} required />
                <br />
                <label><b>Email</b></label>
                <input className="input" style={this.state.error.email ? errorObjStyle : null} type="text" placeholder="Enter Email" onChange={(e) => { this.handleInputChange(e, "email") }} required />
                <br />
                <label><b>Password</b></label>
                <input className="input" style={this.state.error.password ? errorObjStyle : null} type="password" placeholder="Enter Password" onChange={(e) => { this.handleInputChange(e, "password") }} required />
                <br />
                <label><b>Repeat Password</b></label>
                <input  className="input" style={this.state.error.confirmPassword ? errorObjStyle : null} type="password" placeholder="Repeat Password" onChange={(e) => { this.handleInputChange(e, "confirmPassword") }} required />
                <br />
                <button className="signupbtn" onClick={this.handleSubmit} className="button">Sign up</button>
            </div>
        )
    }

}

//disabled={this.state.submitEnable}

export default Signup;