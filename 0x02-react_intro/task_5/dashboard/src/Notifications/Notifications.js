import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import {getLatestNotification} from '../utils/utils'

const Notifications = () => {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority= 'default'>New course available</li>
                <li data-priority= 'urgent'>New resume available</li>
                <li data-priority= 'urgent' dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}></li>
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