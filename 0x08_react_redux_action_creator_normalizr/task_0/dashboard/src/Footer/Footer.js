import React, {useContext} from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import MyContext from '../App/AppContext';

function Footer() {
    const {user} = useContext(MyContext);
    return (
        <footer className='App-footer'>
            {user.isLoggedIn && <a href="#">Contact us</a>}
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
    )
}

export default Footer;