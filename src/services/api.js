import axios from "axios";

const instance = axios.create({
  baseURL: "http://app:500/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
