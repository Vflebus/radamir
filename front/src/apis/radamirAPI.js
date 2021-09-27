import axios from "axios";

export default axios.create({
  baseURL: "http://104.248.42.223:3333/v1"
})