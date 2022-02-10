import axios from "axios";

const imagesApi = {
  fetchImages: async () => {
    try {
      return await axios.get("https://jsonplaceholder.typicode.com/photos");
    } catch (error) {
      return error;
    }
  },
};

export default imagesApi;
