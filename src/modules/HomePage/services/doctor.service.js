import axios from 'axios';

export const getDoctors = async () => {
  try {
    const {data} = await axios.get('http://www.something.com');
    return data;
  } catch (error) {
    throw error;
  }
};
