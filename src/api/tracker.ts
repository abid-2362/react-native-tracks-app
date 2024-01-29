import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TrackerServer = axios.create({
  baseURL: 'http://192.168.136.172:3000',
});

TrackerServer.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default TrackerServer;
