import axios from 'axios';

// eslint-disable-next-line no-undef
const BirthdayApiService =
  'http://192.168.5.16:30485/api/v1/employees/birthdays';

const getEmployeesBirthdays = async () => {
  try {
    const response = await axios.get(BirthdayApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployeesBirthdays };
