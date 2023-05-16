import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
    const type = props.type;
    const html = props.html;
    const value = props.value;
    if (value) 
        return (<li data-notification-type={type}>{value}</li>)
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
};

NotificationItem.prototype = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
};

NotificationItem.defaultProps = {
    type: "default"
};


export default NotificationItem