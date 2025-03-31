import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request Interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    // manually insert key-value pair of 'Authorization' and the value as the access token in the config(request object).headers
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log("modded request with auth header ==>", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;

axiosInstance.interceptors.response.use(
  // Success handler (when the response is successful)
  function (response) {
    // Simply return the response as is if the request is successful (status 2xx)
    return response;
  },

  // Error handler (when there is an error, such as 401 Unauthorized)
  async function (error) {
    // Get the original request configuration (the one that caused the error)
    const originalRequest = error.config;
    console.log("originalRequest/error.config:", originalRequest);

    // Check if the error response is a 401 (Unauthorized) and ensure the retry flag is not already set
    if (error.response.status === 401 && !originalRequest.retry) {
      // Set a flag 'retry' on the original request to avoid retrying this request more than once
      originalRequest.retry = true;

      // Get the refresh token from localStorage (this assumes it's stored there)
      const refreshToken = localStorage.getItem("refreshToken");

      try {
        // Send a POST request to the server to refresh the access token using the refresh token
        const response = await axiosInstance.post("/token/refresh/", {
          refresh: refreshToken,
        });

        // Log the new access token returned from the refresh request
        console.log("New access token==>", response.data.access);

        // Save the new access token to localStorage
        localStorage.setItem("accessToken", response.data.access);

        // Set the new access token in the Authorization header of the original request
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.access}`;

        // Retry the original request with the new access token
        return axiosInstance(originalRequest);
      } catch (error) {
        // If the refresh token request fails (e.g., the refresh token has expired),
        // remove both the access and refresh tokens from localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }

    // If the error is not 401 or retry fails, reject the promise with the error
    return Promise.reject(error);
  }
);
