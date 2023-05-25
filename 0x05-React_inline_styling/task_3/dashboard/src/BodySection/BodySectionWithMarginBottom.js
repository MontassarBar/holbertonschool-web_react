import React from "react";
import BodySection from "./BodySection";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {
    return (
        <div className={css(styles.marginbot)}>
            <BodySection {...props} />
        </div>
    )
}

BodySectionWithMarginBottom.prototypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

const styles = StyleSheet.create({
    marginbot: {
        marginBottom: '40px'
    }
});

export default BodySectionWithMarginBottom;