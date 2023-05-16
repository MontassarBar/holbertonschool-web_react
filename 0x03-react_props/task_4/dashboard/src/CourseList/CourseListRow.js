import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
    const isHeader = props.isHeader;
    const textFirstCell = props.textFirstCell;
    const textSecondCell = props.textSecondCell;

    if (isHeader) {
        if (textSecondCell === null)
            return <tr>
                <th colSpan={2}>{textFirstCell}</th>
            </tr>
        return <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        </tr>
    }
    return <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </tr>
}
    CourseListRow.propTypes = {
        isHeader: PropTypes.bool,
        textFirstCell: PropTypes.string.isRequired,
        textSecondCell: PropTypes.string
    };

    CourseListRow.defaultProps = {
        isHeader: false,
        textSecondCell: null
    };

export default CourseListRow;