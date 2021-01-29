import Config from 'react-native-config';
import Axios from 'axios';

/**
 *
 * @param {string} query
 */
export const searchNews = async (query = '') => {
  const url = `${Config.THE_GUARDIAN_API_BASE_URL}/search`;
  const params = {
    q: query,
    'api-key': Config.THE_GUARDIAN_API_KEY,
    'show-fields': 'thumbnail,wordcount',
  };
  try {
    const { data } = await Axios.get(url, { params });
    return data.response.results;
  } catch (error) {
    return Promise.reject([]);
    /**
     * TODO: Somehow handle error
     */
  }
};
