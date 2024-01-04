import axios from 'axios';  //imported axios from the axios library
const api_url = 'http://localhost:3001/api/v1/'; //endpoint for the API

// this line accesses the token from the .env file in the root of my project
const access_token = import.meta.env.VITE_REACT_APP_API_TOKEN;

// this function is used to fetch the courses from the endpoint
const getCourses = async () => {
  // tryCatch block for proper error handling
  try {
    const response = await axios.get(`${api_url}courses`, {
      headers: { Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', },
    });
    return response.data;
  } catch (error) {
   throw Error("Error fetching courses", error)
  }
};


// this function is used to fetch the modules for a particular course from the endpoint
const getModulesForCourse = async (courseId) => {
    try {
      const response = await axios.get(`${api_url}courses/${courseId}/modules`, {
        headers: { Authorization: `Bearer ${access_token}`},
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching modules for course ${courseId}:`, error);
      throw error;
    }
  };
 
  
  export { getCourses, getModulesForCourse }