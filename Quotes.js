// 1. Create an axios request to the type.fit API for the quotes data  

axios
  .get("https://type.fit/api/quotes")
  .then((response) => {
    // 2. Create an paragraph element with the quote text
    console.log(response.data[0].text);
    const paragraph = document.createElement("p");
    paragraph.textContent = response.data[0].text;
    const sectionContainer = document.querySelector(".section-container");
    sectionContainer.appendChild(paragraph);
  })
  .catch((e) => {
    console.log({ e });
  });
