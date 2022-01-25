console.log("AB9");
//Shopping cart using Classes

// -- html elements
const prodName = document.getElementById("prod-name");
const prodPrice = document.getElementById("prod-price");
const addBtn = document.querySelector(".add-prod");
const searchBtn = document.querySelector(".search-product-btn");
const searchProduct = document.getElementById("search-product-input");
const body = document.querySelector("body");
const productsSection = document.querySelector(".products");
const appendShowDiv = document.querySelector(".show-product");
const totalh4 = document.createElement("h4");

///
body.append(productsSection);
///

// CLASSES

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
    this.username;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products.pop(product);
  }

  searchProduct(productName) {
    const result = this.products.filter((p) => p.name === productName);
    console.log(result);

    const resultdiv = document.createElement("div");
    resultdiv.innerHTML = `
      <p class='show-name'>Products: ${result[0].name}</p>
      <p class='show-price'>Price: ${result[0].price}</p>`;
    appendShowDiv.append(resultdiv);
  }

  getTotal() {
    const totalprice = this.products.reduce((a, b) => a + b.price, 0);
    totalh4.innerHTML = `Total Price: ${this.convertToCurrency(
      "eur",
      totalprice
    )}`;
    productsSection.append(totalh4);
    return totalprice;
  }
  renderProducts() {
    for (const p of this.products) {
      const divContainer = document.createElement("div");
      divContainer.classList.add("product-container");
      divContainer.innerHTML = `
       
        <p class='name'>Product: ${p.name}</p>  
        <p class='price'>Price: ${this.convertToCurrency("eur", p.price)}</p>`;
      productsSection.append(divContainer);
    }
  }

  async getUser(user) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user}`
      );
      const data = await response.json();
      const h3 = document.createElement("h3");
      h3.innerHTML = `Username: ${data.username}`;
      productsSection.append(h3);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  convertToCurrency(curren, number) {
    const currencyCap = curren.toUpperCase();
    const options = {
      style: "currency",
      currency: currencyCap,
    };
    return new Intl.NumberFormat("dk-DK", options).format(number);
  }
}
const shoppingCart = new ShoppingCart();

// FUNCTIONS

function rdm() {
  return Math.floor(Math.random() * 10) + 1;
}
function manullyAddProd() {
  const flatscreen = new Product("flat-screen", 5000);
  const books = new Product("books", 2000);
  const apples = new Product("apples", 3000);
  const oranges = new Product("oranges", 4000);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(books);
  shoppingCart.addProduct(apples);
  shoppingCart.addProduct(oranges);
  console.log(shoppingCart);
  shoppingCart.renderProducts();
  shoppingCart.getUser(rdm());
  shoppingCart.getTotal();
}

manullyAddProd();
function inputProduct() {
  const inputProduct = new Product(prodName.value, Number(prodPrice.value));
  console.log(inputProduct);
  shoppingCart.addProduct(inputProduct);
  shoppingCart.renderProducts();
  shoppingCart.getUser(rdm());
  shoppingCart.getTotal();

  return inputProduct;
}

function serachProdFunc() {
  const searchValue = searchProduct.value;
  shoppingCart.searchProduct(searchValue);
  appendShowDiv.classList.toggle("hide");
}

// EVENLISTENERS
addBtn.addEventListener("click", inputProduct);
searchBtn.addEventListener("click", serachProdFunc);
