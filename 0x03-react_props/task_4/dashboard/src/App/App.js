import React from 'react';
import './App.css';
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js"
import Footer from "../Footer/Footer.js";
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


function App(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <React.Fragment>
    <Notifications />
    <div className='App'>
      <Header />
      <hr></hr>
      {isLoggedIn ? <CourseList /> : <Login />}
      <hr></hr>
      <Footer />
    </div>
    </React.Fragment>
  );
}

App.prototype = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}


export default App;