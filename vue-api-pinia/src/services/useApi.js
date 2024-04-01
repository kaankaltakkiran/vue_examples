import axios from "axios";
//! env dosyasından gelen key ve url bilgilerini kullanmak için
export function api() {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
  });
}

export const apiKey = () => {
  return import.meta.env.VITE_APP_API_KEY;
};