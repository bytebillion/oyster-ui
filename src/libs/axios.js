import axios from "axios";
import config from "./config";

// Create instance called instance
const instance = axios.create({
  baseURL: config.backend.baseUrl,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

// Set the AUTH token for any request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//  dont thow error on 4XX status codes
instance.interceptors.response.use(
  async (response) => {
    if (response?.data?.notSubscribed) {
      //   console.log("openSubscriptionPrompt", response.data);
      // window.location.replace(`${config.frontend.url}/pricing`);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
