import React from "react";
import BodySection from "./BodySection";
import PropTypes from 'prop-types';
import "./BodySection.css"

function BodySectionWithMarginBottom(props) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection {...props} />
        </div>
    )
}

BodySectionWithMarginBottom.prototypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default BodySectionWithMarginBottom;