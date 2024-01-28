import axios from 'axios';

const TrackerServer = axios.create({
  baseURL: 'http://192.168.136.172:3000',
});

export default TrackerServer;
