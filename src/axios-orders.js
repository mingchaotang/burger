import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-ming.firebaseio.com/'
});

export default instance;
