import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.18.20:7878/car-wash',
});
