import React from 'react';

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

export default BodySection;