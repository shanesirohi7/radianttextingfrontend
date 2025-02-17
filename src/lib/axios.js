import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://radianttextingbackend.onrender.com/api",
  withCredentials: true,
});
