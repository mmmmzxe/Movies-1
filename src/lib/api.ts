import axios from 'axios';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.tvmaze.com';

export const getTVChannels = async () => {
    try {
        const response = await axios.get(`${API_URL}/channels`);
        return response.data;
      } catch (error: any) {
        if (error.response) {
          // Server responded with a status code out of range 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // No response received from server
          console.error('Request made but no response:', error.request);
        } else {
          // Some other error occurred during the setup of the request
          console.error('Error message:', error.message);
        }
        return [];
      }
      
};
