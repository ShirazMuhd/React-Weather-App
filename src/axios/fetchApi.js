import axios from "axios";

const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchData = (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}&units=metric`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch(() => {
        reject();
      });
  });
};

export default fetchData;
