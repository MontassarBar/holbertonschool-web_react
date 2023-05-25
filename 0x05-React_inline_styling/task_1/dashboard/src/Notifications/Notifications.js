import React from 'react';
import closeIcon from '../assets/close-icon.png'
import {getLatestNotification} from '../utils/utils'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

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
            <div className={css(styles.container)}>
                <div className={css(styles.menuItem)}>
                    <p className={css(styles.bold)}>Your notifications</p>
                </div>
                {displayDrawer && <div className={css(styles.notification)}>
                    <p className={css(styles.bold)}>No new notification for now</p>
                </div>}
            </div>
        )
    else {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.menuItem)}>
                <p className={css(styles.bold)}>Your notifications</p>
            </div>
            { displayDrawer && <div className={css(styles.notification)}>
                <p className={css(styles.bold)}>Here is the list of notifications</p>
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
    displayDrawer: true,
    listNotifications: []
};

const styles = StyleSheet.create({
    container: {
        width: 'fit-content',
        height: '100px',
        position: 'absolute',
        right: '10px',
    },

    notification: {
        borderStyle: 'dashed',
        borderColor: 'red',
        padding: '10px 30px 10px 50px'
    },

    menuItem: {
        width: 'fit-content',
        marginLeft: 'auto'
    },

    bold: {
        fontWeight: 'bold'
    }
});

export default Notifications;