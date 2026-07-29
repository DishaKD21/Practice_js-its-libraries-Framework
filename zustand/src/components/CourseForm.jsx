import React from "react";
import useCourseStore from "../store/courseStore";
const CourseForm = () => {
  const { addCourse } = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = React.useState("");
  console.log("courseForm rerendered");
  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Course title is required");
    addCourse({
      id: Math.ceil(Math.random() * 1000),
      title: courseTitle,
      completed: false,
    });
    setCourseTitle("");
  };
  return (
    <div>
      Course Form
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button onClick={handleCourseSubmit}>Add Course</button>
    </div>
  );
};

export default CourseForm;
