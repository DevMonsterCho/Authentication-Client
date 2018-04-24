import axios from 'axios';
import * as cookie from './cookie';

let instance = axios.create({
    baseURL: 'https://api.authentication.dmcho.com',
    responseType: 'json',
    timeout: 3000,
});

// instance.defaults.headers.common['crossDomain'] = true;
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "https://api.authentication.dmcho.com";
// instance.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(function (config) {
  console.log(`%c REQ.${config.method.toUpperCase()} : `, 'color: lightblue', config.url);
  console.log(`%c REQ : `, 'color: lightblue', config);
  return config;
}, function (error) {
  console.log(`%c @@@@@ REQUEST - ERROR @@@@@`, 'color: red')
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  console.log(`%c RES.${response.config.method.toUpperCase()} : %c ${response.config.url}`, 'color: green', 'color: #000');
  console.log(`%c RES : `, 'color: green', response);
  return response;
}, function (error) {
  console.log(`%c @@@@@ RESPONSE - ERROR @@@@@`, 'color: red')
  return Promise.reject(error);
});

export default instance;
