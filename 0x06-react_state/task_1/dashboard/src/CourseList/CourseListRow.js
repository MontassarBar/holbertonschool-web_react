import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow(props) {
    const isHeader = props.isHeader;
    const textFirstCell = props.textFirstCell;
    const textSecondCell = props.textSecondCell;
    const style = {backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab"};

    if (isHeader) {
        if (textSecondCell === null)
            return <tr className={css(styles.row)} style={style}>
                <th colSpan={2}>{textFirstCell}</th>
            </tr>
        return <tr className={css(styles.row)} style={style}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        </tr>
    }
    return <tr style={style}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </tr>
}
    CourseListRow.propTypes = {
        isHeader: PropTypes.bool,
        textFirstCell: PropTypes.string.isRequired,
        textSecondCell: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]),
    };

    CourseListRow.defaultProps = {
        isHeader: false,
        textSecondCell: null
    };

    const styles = StyleSheet.create({
        row: {
            borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
          },
    });

export default CourseListRow;