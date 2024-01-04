// Import necessary dependencies from React and external libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { setModules } from "../redux/modules/modulesSlice";
import { getModulesForCourse } from "../services/fetchRequests";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Modules component responsible for displaying course modules
const Modules = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modules);


  useEffect(() => {
    // asynchronous  function to fetch modules 
    const fetchModules = async () => {
      try {
        // fetch modules data for the specified course
        const modulesData = await getModulesForCourse(courseId);
        dispatch(setModules(modulesData));
      } catch (error) {
        throw Error("Error fetching modules for course", error);
      }
    };

    // called the fetchModules function
    fetchModules();
  }, [dispatch, courseId]);  // dependencies array for useEffect hook

  return (
    <section className="relative">
      <div className="md:mx-[3rem] flex flex-col">
        <div className="my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-1 lg:grid lg:grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              {/* Previous button to navigate to the previous page */}
              <Link to="/">
                <ArrowBackIcon fontSize="large" />
              </Link>
              <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">
                Modules for Course {courseId}
              </h4>
            </div>
            {/* Main heading for the Modules section */}
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
              Explore Modules For Course {courseId}
            </h1>
          </div>
        </div>
      </div>

      <div className="md:mx-[3rem] mt-8">
        {modules.length === 0 ? (
          // Error  message when there are no modules for the course
          <p className="text-gray-600 text-center">
            Sorry, There are No Modules for this Course.
          </p>
        ) : (
          // Render the list of modules when they exist
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* loop through the modules to create the list of modules */}
            {modules.map((module, index) => (
              <li
                key={module.id}
                className={`p-4 bg-white dark:bg-gray-800 max-w-[20%rem] shadow-md rounded-md transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeIn animate__delay-${
                  index + 1
                }s`}
              >
                {/* display of module name */}
                <h3 className="text-lg font-semibold mb-2">{module.name}</h3>
                <p className="text-gray-600">{module.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Modules;
