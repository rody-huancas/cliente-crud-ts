import axios from "axios";

export const configApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
