import axios from "axios";
export default function apiRequests() {
  return axios
    .get("https://api.github.com/users/AxcelEspinal")
    .then((response) => {
      const items = response.data;
      return items;
    })
    .catch((error) => {
      console.log(error);
    });
}
