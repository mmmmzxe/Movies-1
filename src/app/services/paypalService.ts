import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/payment/create-order';

export const createPayPalOrder = async () => {
  try {
    const response = await axios.post(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    // Check if error.response exists, otherwise handle the error accordingly
    if (error.response) {
      console.error('Error response from API:', error.response);
      throw new Error(error.response.data?.message || 'Something went wrong with the API request');
    } else if (error.request) {
      console.error('No response received from API:', error.request);
      throw new Error('No response from the server. Please check your network or API.');
    } else {
      console.error('Error setting up the request:', error.message);
      throw new Error('Error in setting up the request. ' + error.message);
    }
  }
};
