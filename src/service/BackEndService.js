import axios from 'axios';

// eslint-disable-next-line no-undef
const EmployeeApiService = 'http://192.168.5.16:30485/api/v1/employees';

const getEmployees = async () => {
  try {
    const response = await axios.get(EmployeeApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployees };
