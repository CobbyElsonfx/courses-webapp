import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { setModules } from "../redux/modules/modulesSlice";
import { getModulesForCourse } from "../services/fetchRequests";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Modules = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modules);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const modulesData = await getModulesForCourse(courseId);
        dispatch(setModules(modulesData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchModules();
  }, [dispatch, courseId]);

  return (
    <section className="relative">
      <div className="md:mx-[3rem] flex flex-col">
        <div className="my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-1 lg:grid lg:grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              <Link to="/">
                <ArrowBackIcon fontSize="large" />
              </Link>
              <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">
                Modules for Course {courseId}
              </h4>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
              Explore Modules For Course {courseId}
            </h1>
          </div>
        </div>
      </div>

      <div className="md:mx-[3rem] mt-8">
        {modules.length === 0 ? (
          <p className="text-gray-600 text-center">
            Sorry, There are No Modules for this Course.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {modules.map((module, index) => (
              <li
                key={module.id}
                className={`p-4 bg-white dark:bg-gray-800 max-w-[20%rem] shadow-md rounded-md transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeIn animate__delay-${
                  index + 1
                }s`}
              >
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
