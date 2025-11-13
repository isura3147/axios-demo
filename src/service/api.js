import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization =  `Bearer ${token}`
    }
})

export default api;

