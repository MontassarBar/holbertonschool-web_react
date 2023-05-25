import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        if (value) 
            return (<li className={(type === 'default') ? css(styles.defaultStyle, styles.bold, styles.small) : css(styles.urgentStyle, styles.bold, styles.small)} data-notification-type={type} onClick={() => {markAsRead(id)}}>{value}</li>)
        return <li className={(type === 'default') ? css(styles.defaultStyle, styles.bold, styles.small) : css(styles.urgentStyle, styles.bold, styles.small)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>
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

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
    defaultStyle: {
        color: 'rgb(1, 1, 80)'
    },

    urgentStyle: {
        color: 'red'
    },
    small: {
        '@media (max-width: 900px)': {
            width: '100%',
            borderBottom: 'solid',
            borderBottomColor: 'black',
            fontSize: '20px',
            padding: '10px 8px'
        }
    }
});

export default NotificationItem