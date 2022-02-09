console.log("AB9");
// HTML ELEMENTS
function rdm() {
  return Math.floor(Math.random() * 20) + 1;
}
const fullname = document.querySelector(".fullname-1");
const fullname2 = document.querySelector(".fullname-2");
const fullname3 = document.querySelector(".fullname-3");
const owner = document.querySelector(".owner-1");
const owner2 = document.querySelector(".owner-2");
const owner3 = document.querySelector(".owner-3");
const repo = document.querySelector(".url-1");
const repo2 = document.querySelector(".url-2");
const repo3 = document.querySelector(".url-3");
const avatar = document.querySelector(".img-1");
const avatar2 = document.querySelector(".img-2");
const avatar3 = document.querySelector(".img-3");

/// Getting into promises
function first(data) {
  avatar.src = data.items[1].owner.avatar_url;
  fullname.textContent = data.items[1].full_name;
  owner.textContent = data.items[1].owner.login;
  repo.href = data.items[1].owner.repos_url;
}
function second(data) {
  avatar.src = data.items[3].owner.avatar_url;
  fullname.textContent = data.items[3].full_name;
  owner.textContent = data.items[3].owner.login;
  repo.href = data.items[3].owner.repos_url;
}

function third(data) {
  avatar3.src = data.items[2].owner.avatar_url;
  fullname3.textContent = data.items[2].full_name;
  owner3.textContent = data.items[2].owner.login;
  repo3.href = data.items[2].owner.repos_url;
}

async function allAtOnce() {
  try {
    const response1 = await fetch(
      `https://api.github.com/search/repositories?q=user:benna100`
    );
    const response2 = await fetch(
      `https://api.github.com/search/repositories?q=user:benna100`
    );
    const response3 = await fetch(
      `https://api.github.com/search/repositories?q=user:benna100`
    );
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    console.log(data1);
    first(data1);
    second(data2);
    third(data3);
  } catch (error) {
    repo.textContent = error;
    console.log(error);
  }
}

allAtOnce();
