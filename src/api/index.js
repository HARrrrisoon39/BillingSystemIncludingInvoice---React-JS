import axios from "axios";

const url = "https://randomuser.me/api/";

export const fetchPosts = () => {
  return axios.get(url);
};