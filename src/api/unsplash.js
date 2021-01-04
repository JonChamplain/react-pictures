import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YOTUqxQiky3-jWNx2pZCeer_GEL3xYNWzLPzG3A7RzM",
  },
});
