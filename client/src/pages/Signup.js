import React from "react";

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
				<label>Username</label><input /><br />
				<label>Password</label><input /><br />
				<button>Submit</button>
			</form>
		</div>
		)
	}
};
export default Signin