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
import MyContext from './AppContext.js';


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
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => this.logOut()
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }


  logIn(email, password) {
    this.setState({user :{email: email, password: password, isLoggedIn: true}})
  }

  logOut() {
    this.setState({user : {email: '', password: '', isLoggedIn: false}})
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
    document.addEventListener("keydown", this.pressCtrlandH);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
    document.removeEventListener("keydown", this.pressCtrlandH);
    }
  }

  pressCtrlandH(e) {
    if (e.ctrlKey && e.key == "h") {
      e.preventDefault()
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const {
      user,
      logOut,
    } = this.state;
  return (
    <MyContext.Provider value={{user, logOut}}>
    <React.Fragment>
    <Notifications listNotifications={listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
    <div className={css(styles.bold)}>
      <Header />
      <hr className={css(styles.red, styles.height, styles.border)}></hr>
      {this.state.user.isLoggedIn ? 
        <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
      : 
        <BodySectionWithMarginBottom title='Log in to continue'>
          <Login logIn={this.logIn}/>
        </BodySectionWithMarginBottom>
        }
      <BodySection title='News from the School'><p>b9a ken el fetfet</p></BodySection>
      <hr className={css(styles.red, styles.height, styles.border)}></hr>
      <footer className={css(styles.footer)}>
        <Footer />
      </footer>
    </div>
    </React.Fragment>
    </MyContext.Provider>
  );
  }
}

App.prototypes = {
}

App.defaultProps = {
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
