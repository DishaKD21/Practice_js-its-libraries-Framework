import create from "zustand";
import { devtools, persists } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.course],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course,
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persists(courseStore, {
      name: "courses",
    }),
  ),
);

export default useCourseStore;
