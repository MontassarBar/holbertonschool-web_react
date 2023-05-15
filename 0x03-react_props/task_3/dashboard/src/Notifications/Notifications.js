import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import {getLatestNotification} from '../utils/utils'
import NotificationItem from './NotificationItem';

const Notifications = () => {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type='default' value='New course available'/>
                <NotificationItem type='urgent' value='New resume available'/>
                <NotificationItem type='urgent' html={{ __html: `${getLatestNotification()}` }}/>
            </ul>
            <button style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'}} aria-label="Close" onClick={() => console.log(`Close button has been clicked`)}>
                    <img src={closeIcon} style={{width: '25px'}} alt="close icon"/>
                </button>
        </div>
    )
}

export default Notifications;