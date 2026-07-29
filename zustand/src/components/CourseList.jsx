import React from "react";
import useCourseStore from "../store/courseStore";
import Fragment from "react";
const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    }),
  );

  return (
    <ul>
      {courses.map((course, i) => {
        return (
          <Fragment key={i}>
            <li
              style={{
                textDecoration: course.completed ? "line-through" : "none",
              }}
            >
              <span>
                <input
                  type="checkbox"
                  checked={course.completed}
                  onChange={(e) => { 
                    toggleCourseStatus(course.id)
                  }}
                />
                <span>{course?.title}</span>
                <button onClick={() => removeCourse(course.id)}>X</button>
              </span>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

export default CourseList;
