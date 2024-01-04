import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCourses } from "../redux/courses/coursesSlice";
import { setModules } from "../redux/modules/modulesSlice";
import { getCourses } from "../services/fetchRequests";
import { getModulesForCourse } from '../services/fetchRequests';

const Main = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const modules = useSelector((state) => state.modules);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        dispatch(setCourses(coursesData));

        // Fetch modules for each course and store in the modules state
        const modulesData = await Promise.all(
          coursesData.map(async (course) => {
            const modulesForCourse = await getModulesForCourse(course.id);
            return { courseId: course.id, modules: modulesForCourse };
          })
        );
        dispatch(setModules(modulesData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="course-card animate__animated animate__fadeIn"
          >
            <div className="card bg-base-100 shadow-xl p-4 transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-xl font-bold mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-4">{course.course_code}</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Modules:</span>{" "}
                  {modules.find((mod) => mod.courseId === course.id)?.modules
                    ? modules.find((mod) => mod.courseId === course.id)?.modules
                      .length
                    : 0}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <Link to={`/courses/${course.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
