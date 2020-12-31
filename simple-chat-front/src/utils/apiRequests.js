import axios from "axios";

const getData = () => {
  axios.get("https://api.github.com/users/hacktivist123");
};

export default getData;
