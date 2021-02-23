import axios from 'axios';
import config from '../config';

class RequestService {
  // eslint-disable-next-line class-methods-use-this
  async auth(data) {
    const url = `${config.apiUrl}/api/auth/login`;

    try {
      const response = await axios({
        method: 'POST',
        url,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      });

      const { data: responseData } = response;

      if (responseData.error) {
        return {
          token: null,
          error: responseData.error,
        };
      }

      return {
        token: responseData.data.token,
      };
    } catch (error) {
      return {
        token: null,
        error: error.response?.data?.error,
      };
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async preferenceTypeList(token) {
    const url = `${config.apiUrl}/api/preference-type/list`;

    try {
      const response = await axios({
        method: 'GET',
        url,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const { data: responseData } = response;

      if (responseData.error) {
        return {
          models: [],
          error: responseData.error,
        };
      }

      return {
        models: responseData.data,
      };
    } catch (error) {
      return {
        models: [],
        error: error.response?.data?.error,
      };
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async recipeList(token) {
    const url = `${config.apiUrl}/api/recipe/list`;

    try {
      const response = await axios({
        method: 'GET',
        url,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const { data: responseData } = response;

      if (responseData.error) {
        return {
          models: [],
          error: responseData.error,
        };
      }

      return {
        models: responseData.data,
      };
    } catch (error) {
      return {
        models: [],
        error: error.response?.data?.error,
      };
    }
  }
}

export default new RequestService();
