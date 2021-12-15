//gif
const gifForm = document.getElementById("gif-form");
const gifSearch = document.querySelector("#search-gif");
const gifBtn = document.querySelector("#search-gif-btn");
const gifShow = document.querySelector(".show-gif");

gifForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test test test ok");
  const gifSearch = gifForm.elements.search.value;
  const gifNumLimit = gifForm.elements.number.value;
  const toNum = parseInt(gifNumLimit);
  console.log(toNum);
  console.log(gifSearch);
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=GVagCJ8SjhFuxxVJs9iHZA10cIVTIe1S&q=${gifSearch}&limit=${toNum}`
  )
    .then((response) => response.json())
    .then((content) => {
      console.log(content);
      for (let i = 0; i < content.data.length; i++) {
        const gifIMG = document.createElement("img");
        gifIMG.src = content.data[i].images.downsized.url;
        gifShow.appendChild(gifIMG);
        // gifShow.innerHTML = `
        // <img src="${content.data[i].images.downsized.url}" />`;
      }
    });
});
