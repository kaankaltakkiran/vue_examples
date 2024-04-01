//! Flimleri getirme işlemleri için kullanılan servis dosyası
const endpoint = "movie/";
//! Api ve ApiKey bilgilerini kullanmak için import edildi
import { api, apiKey } from "./useApi";

export default {
  topRated() {
    return api().get(endpoint + "/top_rated?api_key=" + apiKey());
  },
};