import React from 'react';
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js"
import Footer from "../Footer/Footer.js";
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';


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
    <div className={css(styles.bold)}>
      <Header />
      <hr className={css(styles.red, styles.height, styles.border)}></hr>
      {isLoggedIn ? 
        <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
      : 
        <BodySectionWithMarginBottom title='Log in to continue'>
          <Login />
        </BodySectionWithMarginBottom>
        }
      <BodySection title='News from the School'><p>b9a ken el fetfet</p></BodySection>
      <hr className={css(styles.red, styles.height, styles.border)}></hr>
      <footer className={css(styles.footer)}>
        <Footer />
      </footer>
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
  isLoggedIn: true,
  logOut: function() {}
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'rgb(215, 5, 5)'
  },

  height: {
    height: '3px'
  },

  border: {
    border: 'none'
  },

  footer: {
    textAlign: 'center',
    fontStyle: 'italic'
  },

  bold: {
    fontWeight: 'bold'
  }

});

export default App;
