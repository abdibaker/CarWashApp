import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.15.57:7879/car-wash',
});