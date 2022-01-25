import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://cfd-json.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    //Attach token to request if exists
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer  ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    // console.log('interceptors response', response.data);
    return response.data;
  },
  function (error) {
    console.log(error.response);
    if (!error.response) {
      throw new Error("Error. Pls try again later");
    }
    // // if(error.response.status===401){
    // //     window.location.assign('/login');
    //     return;
    // // }

    return Promise.reject(error);
    //throw new Error(error);
  }
);

export default axiosClient;
