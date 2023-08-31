const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "YI6gy9AkvIs0s3yyIOE0zXChUexzrU00";

axios
  .get(`${BASE_URL}?api_key=${API_KEY}&limit=1&q=zen`)
  .then((response) => {
    console.log(response.data.data[0]);
    const imageData = response.data.data[0];
    console.log({ imageData });
    const image = document.createElement("img");
    image.setAttribute("src", imageData.images.downsized_large.url);
    const sectionContainer = document.querySelector(".section-container");
    sectionContainer.appendChild(image);
  })
  .catch((e) => {
    console.log({ e });
  });

//   axios
//   .get(`${BASE_URL}?api_key=${API_KEY}&limit=1`)
//   .then((response) => {
//     console.log(response.data.data[0]);
//     const imageData = response.data.data[0];
//     console.log({ imageData });
//     const image = document.createElement("img");
//     image.setAttribute("src", imageData.url);
//     const sectionContainer = document.querySelector(".section-container");
//     sectionContainer.appendChild(image);
//   })
//   .catch((e) => {
//     console.log({ e });
//   });
