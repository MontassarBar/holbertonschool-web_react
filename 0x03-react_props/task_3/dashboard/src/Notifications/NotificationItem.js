import React from 'react';

function NotificationItem(props) {
    const type = props.type;
    const html = props.html;
    const value = props.value;
    if (value) 
        return (<li data-notification-type={type}>{value}</li>)
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
}


export default NotificationItem