import React from 'react';
import './App.css';
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js"
import Footer from "../Footer/Footer.js";
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
]

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.pressCtrlandH);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.pressCtrlandH);
  }

  pressCtrlandH(e) {
    if (e.ctrlKey && e.key == "h") {
      e.preventDefault()
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
  const { isLoggedIn } = this.props;
  return (
    <React.Fragment>
    <Notifications listNotifications={listNotifications} />
    <div className='App'>
      <Header />
      <hr></hr>
      {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      <hr></hr>
      <Footer />
    </div>
    </React.Fragment>
  );
  }
}

App.prototypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: function() {}
}


export default App;
