// import axios from 'axios'
// import localStorage from 'redux-persist/es/storage';

// const basicURL = 'http://localhost:4000'
// console.log("local storageeeeeeeeeeee",localStorage.getItem('persist:Theatre-Project'));

// var accessToken = JSON.parse(JSON.parse(localStorage.getItem('persist:Theatre-Project')).login)&& JSON.parse(JSON.parse(localStorage.getItem('persist:Theatre-Project')).login).token
// const jwtToken = accessToken
// console.log("++++++++++++++",jwtToken)

// export const secureRequest = axios.create({
//     baseURL:basicURL,
//     headers:{token:jwtToken}
// })

// export const publicRequest = axios.create({
//     baseURL:basicURL
// })



import axios from 'axios';
import localStorage from 'redux-persist/es/storage';

const basicURL = 'http://localhost:4000';

// Placeholder axios instances
export const secureRequest = axios.create({
  baseURL: basicURL,
  headers: { token: '' }, // Placeholder token
});

export const adminSecureRequest = axios.create({
  baseURL: basicURL,
  adminheaders: { token: '' }, // Placeholder token
});

export const publicRequest = axios.create({
  baseURL: basicURL,
});

(async () => {
  try {
    // Get data from localStorage
    const storageData = await localStorage.getItem('persist:Theatre-Project');
    console.log('Local Storage Data:', storageData);

    if (storageData) {
      const parsedData = JSON.parse(storageData);
      const loginData = parsedData.login ? JSON.parse(parsedData.login) : null;
      const adminLoginData = parsedData.adminLogin ? JSON.parse(parsedData.adminLogin) : null;

      const accessToken = loginData ? loginData.token : null;
      const adminAccessToken = adminLoginData ? adminLoginData.token : null;
      console.log('Access Token:', accessToken);
      console.log('Admin Access Token:', adminAccessToken);

      // Update secureRequest headers with the token
      secureRequest.defaults.headers.token = accessToken;
      adminSecureRequest.defaults.adminheaders.token = adminAccessToken;
    } else {
      console.log('No data found in localStorage.');
    }
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
  }
})();
