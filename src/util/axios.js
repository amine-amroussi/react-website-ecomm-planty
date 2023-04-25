import axios from "axios";

const instance = axios.create({
  baseURL: "https://planty-api-dgcc.onrender.com/api/v1",
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
  }
);

export default instance;
