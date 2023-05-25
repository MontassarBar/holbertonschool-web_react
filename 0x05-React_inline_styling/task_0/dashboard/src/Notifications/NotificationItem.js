import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, html, value, markAsRead, id } = this.props
        if (value) 
            return (<li data-notification-type={type} onClick={() => {markAsRead(id)}}>{value}</li>)
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>
    }
};

NotificationItem.prototypes = {
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