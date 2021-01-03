import axios from "axios";
export default async function apiRequests() {
  try {
    const data = await axios.get(process.env.REACT_APP_API_LINK);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
}
