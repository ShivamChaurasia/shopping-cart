/**
 * Mocking client-server processing
 */
import axios from './config';

export default {
  getProducts: () =>
    axios
      .get('bins/100mm1')
      .then(response => response.data)
      .catch(error => error),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || 1000),
};
