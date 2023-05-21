import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
    const type = props.type;
    const html = props.html;
    const value = props.value;
    const markAsRead = props.markAsRead;
    const id = props.id;
    if (value) 
        return (<li data-notification-type={type} onClick={() => {markAsRead(id)}}>{value}</li>)
    return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>
};

NotificationItem.prototype = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

NotificationItem.defaultProps = {
    type: "default"
};


export default NotificationItem