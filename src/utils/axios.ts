import axios from "axios";

export default axios.create({
  baseURL: import.meta.env["VITE_ENDPOINT"],
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token") || "",
  },
});
