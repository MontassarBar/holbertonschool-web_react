import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			enableSubmit: false
		}

		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword= this.handleChangePassword.bind(this);
	}
	handleLoginSubmit(e) {
        e.preventDefault()
        this.props.logIn(this.state.email, this.state.password);
    }

	handleChangeEmail(e) {
        this.setState({email: e.target.value})
        if (this.state.email && this.state.password) {
			this.setState({enableSubmit: true})
		}
    }

	handleChangePassword(e) {
        this.setState({password: e.target.value})
        if (this.state.email && this.state.password) {
			this.setState({enableSubmit: true})
		}
    }
	render() {
    return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
	  <form onSubmit={this.handleLoginSubmit}>
		<div className={css(styles.input)}>
		<label htmlFor='Email'>Email:  </label>
			<input type="text" id="Email" name="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
		</div>
		<div className={css(styles.input)}>
		<label htmlFor='password' style={{ marginLeft: '.5rem' }}>Password:  </label>
			<input type="text" id="password" name="password"  style={{ marginLeft: '.5rem' }} value={this.state.password} onChange={this.handleChangePassword}></input>
		</div>
		<div className={css(styles.input)}>
		<input type='submit' style={{backgroundColor: 'white', borderRadius: '4px', padding: '2px 8px 2px 8px',border: '1px solid grey', marginLeft: '.9rem'}} disabled={!this.state.enableSubmit}></input>
		</div>
	  </form>
    </div>
    )
}
}
const styles = StyleSheet.create({
	body: {
		paddingTop: '30px',
    	paddingLeft: '40px',
    	paddingBottom: '300px',
		
  	},
	input: {
		display: 'inline',
		'@media (max-width: 900px)': {
			display: 'block',
	}
	}
});
export default Login;