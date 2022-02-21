const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) =>
  response.send("Meal Sharing Web App")
);

app.get("/meals", async (request, response) => response.send(meals));

app.get("/cheap-meals", async (request, response) => {
  response.send(meals.filter((meals) => meals.price < 70));
});

app.get("/large-meals", async (request, response) => {
  response.send(meals.filter((meals) => meals.maxNumberOfGuests > 3));
});

app.get("/meal", async (request, response) => response.send(meals.id));

app.get("/reservations", async (request, response) =>
  response.send(reservations)
);
app.get("/reservation", async (request, response) =>
  response.send(reservations.id)
);

module.exports = app;
