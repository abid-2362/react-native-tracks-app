import axios from 'axios';

const TrackerServer = axios.create({
  baseURL: 'http://192.168.224.172:3000',
});

export default TrackerServer;
