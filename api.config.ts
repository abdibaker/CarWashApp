import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.231.244:7879/car-wash',
});
