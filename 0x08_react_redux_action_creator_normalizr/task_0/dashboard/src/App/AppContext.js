import { createContext } from 'react';

const user = {
    email: '',
    password: '',
    isLoggedIn: false
}

const logOut = () => {};

const MyContext = createContext({
    user: user,
    logOut: logOut
});

export default MyContext;
