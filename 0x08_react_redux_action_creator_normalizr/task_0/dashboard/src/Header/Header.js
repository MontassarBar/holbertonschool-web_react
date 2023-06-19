import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { useContext } from 'react';
import MyContext from '../App/AppContext';

function Header() {
    const { user, logOut } = useContext(MyContext);
    return (
        <header className={css(styles.header)}>
            <img className={css(styles.img)} src={logo} alt='logo'/>
            <h1>School dashboard</h1>
            {user.isLoggedIn && <section id="logoutSection"><p>Welcome {user.email} <a onClick={logOut}>(logout)</a></p></section>}
        </header>
    )
}

const styles = StyleSheet.create({
    header: {
        color: 'rgb(215, 5, 5)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '40px'
    },
    img: {
        width: '150px',
        height: '150px'
    }
});

export default Header;