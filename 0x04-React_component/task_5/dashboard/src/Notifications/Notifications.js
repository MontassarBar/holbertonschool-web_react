import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import {getLatestNotification} from '../utils/utils'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    constructor(props){
        super(props)
        this.markAsRead = this.markAsRead.bind(this)
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length) {
            return true
        }
        return false
    }

    render() {
    const { displayDrawer, listNotifications } = this.props
    if (listNotifications.length === 0)
        return (
            <div className="container">
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
                {displayDrawer && <div className="Notifications">
                    <p>No new notification for now</p>
                </div>}
            </div>
        )
    else {
    return (
        <div className='container'>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            { displayDrawer && <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <ul>
                {listNotifications.map(notification =>
                <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.__html} markAsRead={this.markAsRead} id={notification.id} />)}
                </ul>
                <button style={{
                    position: 'absolute',
                    top: '50px',
                    right: '0px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'}} aria-label="Close" onClick={() => console.log(`Close button has been clicked`)}>
                        <img src={closeIcon} style={{width: '25px'}} alt="close icon"/>
                    </button>
            </div> }
        </div>
    )}
    }
}

Notifications.prototypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};


export default Notifications;