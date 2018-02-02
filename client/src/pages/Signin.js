import React from "react";
import axios from "axios";

const Signin extends React.Component {
	state = {
		username: "",
		password: ""
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]:value
		})
	};
	handleFormSubmit = event => {
		event.preventDefault();
		if(this.state.username && this.state.password) {
			const data = {username: this.state.username, password: this.state.password }
			axios.post("/api/config/login");
		}
	};

	render() {
	return (
		<div>
			<form action ="POST">
				<label>Username</label><input name ="username" value ={this.state.username} onChange ={this.handleInputChange} /><br />
				<label>Password</label><input type ="password" value ={this.state} onChange ={this.handleInputChange}/><br />
				<button onClick ={handleFormSubmit}>Submit</button>
			</form>
		</div>
		)
	}
};
export default Signin