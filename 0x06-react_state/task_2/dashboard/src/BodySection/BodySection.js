import React from 'react';
import PropTypes from 'prop-types';


function BodySection(props) {
    const title = props.title;
    const children = props.children;
    return (
        <div className="bodySection">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

BodySection.prototypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default BodySection;