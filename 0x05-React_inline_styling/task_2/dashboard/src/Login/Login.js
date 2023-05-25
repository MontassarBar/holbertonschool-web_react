import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (

    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='Email'>Email:  </label>
      <input type="text" id="email" name="email" ></input>
      <label htmlFor='password' style={{ marginLeft: '.5rem' }}>Password:  </label>
      <input type="text" id="password" name="password" style={{ marginLeft: '.5rem' }}></input>
      <button style={{backgroundColor: 'white', borderRadius: '4px', padding: '2px 8px 2px 8px',border: '1px solid grey', marginLeft: '.9rem'}}>OK</button>
    </div>
    )
}
const styles = StyleSheet.create({
  body: {
    paddingTop: '30px',
    paddingLeft: '40px',
    paddingBottom: '300px'
  }
});
export default Login;