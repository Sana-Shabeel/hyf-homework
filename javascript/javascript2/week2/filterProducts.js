const products = getAvailableProducts();
const productUl = document.querySelector("ul");

function renderProducts(prods) {
  //   for (let i = 0; i < products.length; i++) {
  productUl.innerHTML = " ";
  prods.map((prod) => {
    const title = document.createElement("h3");
    const price = document.createElement("li");
    const rating = document.createElement("li");
    title.innerHTML = `Title: ${prod.name}`;
    price.innerHTML = `Price: ${prod.price}`;
    rating.innerHTML = `Rating: ${prod.rating}`;
    productUl.appendChild(title);
    title.appendChild(price);
    title.appendChild(rating);
    rating.style.color = "white";
    price.style.color = "white";
    title.style.paddingBottom = "20px";
  });
}
renderProducts(products);

const input = document.querySelector("#name-input");
// filter products by name
function filterProductsByName() {
  const filprodsByName = products.filter((prod) => {
    const prodsToLowerCase = prod.name.toLowerCase();
    const resultOfFilprods = prodsToLowerCase.includes(
      input.value.toLowerCase()
    );
    return resultOfFilprods;
  });
  return renderProducts(filprodsByName);
}
input.addEventListener("keyup", filterProductsByName);

//
console.log(products);

const numInput = document.querySelector("#number");
numInput.addEventListener("keyup", () => {
  const filterByPrice = products.filter((x) => {
    const price = x.price;
    return price.indexOf(numInput.value) > -1;
  });
  return renderProducts(filterByPrice);
});
