import axios from "axios";

const instance = axios.create({
  baseURL: "https://blue-outstanding-shrimp.cyclic.app/api/v1",
  withCredentials: true,
});

export default instance;
