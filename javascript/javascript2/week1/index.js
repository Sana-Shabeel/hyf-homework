// Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord() {
  const shorter = (left, right) => (left.length <= right.length ? left : right);
  console.log("The shortest word is " + danishWords.reduce(shorter));
}
shortestWord();

// Find and count the Danish letters
const danishString = "Jeg har en blå bil";
const danishLettersArray = [];
function danishLetters() {
  if (
    danishString.includes("å") ||
    danishString.includes("æ") ||
    danishString.includes("ø")
  ) {
    let å = /å/g;
    const countÅ = danishString.match(å).length;
    console.log(danishLettersArray);
    danishLettersArray.push({ total: 1, å: countÅ });
  }
}
danishLetters();

const danishString2 = "Blå grød med røde bær";
const danishLettersArray2 = [];

function danishLetters2() {
  if (
    danishString2.includes("å") ||
    danishString2.includes("æ") ||
    danishString2.includes("ø")
  ) {
    let å = /å/g;
    let æ = /æ/g;
    let ø = /ø/g;
    const countÅ = danishString2.match(å).length;
    const countÆ = danishString2.match(æ).length;
    const countØ = danishString2.match(ø).length;
    const total = countÆ + countØ + countÅ;

    console.log(danishLettersArray2);
    // console.log(countÅ, countÆ, countØ);
    danishLettersArray2.push({ total: total, å: countÅ, æ: countÆ, ø: countØ });
  }
}
danishLetters2();

const spiritAnimalArray = [
  "The fullmoon wolf 🐺",
  "The crying butterfly 🦋",
  "The clever lion 🦁",
  "the brave eagle 🦅",
  "The mighty gorilla 🦍",
  "The bewitching raven 🪶",
  "The stock trading bull 📈🐂",
  "The democratic donkey ♞",
  "The social media influencer flamingo 🦩",
  "The kung fu panda 🐼",
];

function spiritAnimal() {
  const userInput = document.querySelector("#nameInput");
  const message = document.querySelector("#message");
  const random = Math.floor(Math.random() * spiritAnimalArray.length);
  let inputValue = userInput.value.trim();
  if (inputValue.length == 0) {
    message.innerHTML = `Type your name into the field warya 🤬`;
  } else {
    message.innerHTML = `${userInput.value} - ${spiritAnimalArray[random]}`;
  }
}
const firstBtn = document.querySelector("#firstBtn");
firstBtn.addEventListener("click", spiritAnimal, { once: true });

function newSpiritAnimal() {
  return spiritAnimal();
}

const products = getAvailableProducts();
const productUl = document.querySelector("ul");

function renderProducts() {
  for (let i = 0; i < products.length; i++) {
    const title = document.createElement("h3");
    const price = document.createElement("li");
    const rating = document.createElement("li");
    title.innerHTML = `Title: ${products[i].name}`;
    price.innerHTML = `Price: ${products[i].price}`;
    rating.innerHTML = `Rating: ${products[i].rating}`;
    productUl.appendChild(title);
    title.appendChild(price);
    title.appendChild(rating);
    rating.style.color = "white";
    price.style.color = "white";
    title.style.paddingBottom = "20px";
  }
}
