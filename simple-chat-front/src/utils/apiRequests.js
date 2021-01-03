import axios from "axios";
export default async function apiRequests() {
  try {
    const data = await axios.get("https://api.github.com/users/AxcelEspinal");
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
}
