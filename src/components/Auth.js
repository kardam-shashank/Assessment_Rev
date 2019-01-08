import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';

class Auth extends Component{

    constructor(props){
        super(props);
        this.state={
            login:true
        }
    }

    toggleLogin =()=>{
        this.setState({
            login:!this.state.login
        })
    }

    render(){
        return(
            <div>
                {this.state.login?<Login handleLogin={this.props.handleLogin}/>:<Signup toggleLogin={this.toggleLogin} />}
                {this.state.login ? <button className= "button btn-signup wrap" onClick={this.toggleLogin}>Sign up</button> : <button className= "button btn-signup wrap" onClick={this.toggleLogin}>Login</button>}
            </div>
        )
    }

}

export default Auth;