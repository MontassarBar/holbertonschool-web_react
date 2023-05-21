import React from 'react';
import './Login.css';

function Login() {
    return (

    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='Email'>Email:  </label>
      <input type="text" id="email" name="email" style={{ marginLeft: '.5rem'}}></input>
      <label htmlFor='password' style={{ marginLeft: '.5rem' }}>Password:  </label>
      <input type="text" id="password" name="password" style={{ marginLeft: '.5rem' }}></input>
      <button style={{backgroundColor: 'white', borderRadius: '4px', padding: '2px 8px 2px 8px',border: '1px solid grey', marginLeft: '.9rem'}}>OK</button>
    </div>
    )
}

export default Login;