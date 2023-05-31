import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

function CourseList(props) {
    const listCourses = props.listCourses;
    return(
        <div>
        {listCourses.length === 0 ? <p>No course available yet</p> :
        <table id='CourseList' className={css(styles.courseList)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
            </thead>
            <tbody>
            {listCourses.map((course) => 
            <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />)}
            </tbody>
        </table>}
        </div>
    );
};

CourseList.prototype = {
    listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

const styles = StyleSheet.create({
    courseList: {
        paddingTop: '30px',
        paddingLeft: '40px',
        paddingBottom: '300px',
        position: 'relative',
        left: '10px',
        width: '1200px'
    }
});


export default CourseList;