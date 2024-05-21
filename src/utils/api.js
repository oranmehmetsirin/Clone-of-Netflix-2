import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer (hideApi)`,
  },
  params: {
    language: "en-EN",
  },
});

export default api;
