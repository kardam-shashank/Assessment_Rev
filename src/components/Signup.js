import React, { Component } from 'react';

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
            submitEnable: true
        }
    }

    handleSubmit=()=>{
        //saving the userdata in localstorage
        window.localStorage.setItem('user', JSON.stringify(this.state.userSignupData));
        this.props.toggleLogin();
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
            <div>
                <h1>Signup</h1>
                <p>Please fill the form to create an account</p>

                <label><b>Name</b></label>
                <input type="text" placeholder="Enter Name" onChange={(e) => { this.handleInputChange(e, "name") }} required />

                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" onChange={(e) => { this.handleInputChange(e, "email") }} required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" onChange={(e) => { this.handleInputChange(e, "password") }} required />

                <label><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" onChange={(e) => { this.handleInputChange(e, "confirmPassword") }} required />
                <button disabled={this.state.submitEnable} className="signupbtn" onClick={this.handleSubmit}>Sign up</button>
            </div>
        )
    }

}

export default Signup;