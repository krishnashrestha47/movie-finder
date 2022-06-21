import axios from "axios";

const apiEndPoint = "http://www.omdbapi.com/?apikey=513ec84a&";

export const fetchMovieInfo = (title) => {
  try {
    const url = apiEndPoint + "t=" + title;
    // const { data } = await axios.get(url);
    // return data;
    return axios.get(url);
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
