import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
//import post data from postdata

class Login extends Component {
	
	render() {
	const responseFacebook = (response) => {
  	console.log(response);
  	this.signup(response, 'facebook');
	}
		return (
	<div>
	<FacebookLogin
    appId="2027252597529935"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,

    </div>
	}
}

export default Login;
