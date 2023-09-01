// 1. create a base url for the API and obtain a api key from Giphy

const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "YI6gy9AkvIs0s3yyIOE0zXChUexzrU00";

// 2. Create an axios request to the Giphy API with the search term for Mediation
axios
  .get(`${BASE_URL}?api_key=${API_KEY}&limit=1&q=mediation`)
  .then((response) => {
    // 3. Create an image element and set its src attribute to the image URL
    const imageData = response.data.data[0];
    const image = document.createElement("img");
    image.setAttribute("src", imageData.images.downsized_large.url);
    const sectionContainer = document.querySelector(".section-container");
    sectionContainer.appendChild(image);
  })
  .catch((e) => {
    console.log({ e });
  });
