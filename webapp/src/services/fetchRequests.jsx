import axios from 'axios';

const api_url = 'http://localhost:3001/api/v1/';
const access_token = import.meta.env.VITE_REACT_APP_API_TOKEN;


const getCourses = async () => {
  try {
    const response = await axios.get(`${api_url}courses`, {
      headers: { Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};


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