const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

//  meals with reviews
meals.forEach((meal, idx) => {
  const review = reviews.filter((res) => res.mealId === meal.id);
  meal.review = review;
});

// to aviod repeating
const random = (x) => {
  return Math.floor(Math.random() * x.length);
};

// Route Handlers
const getAllmeals = async (request, response) => {
  response.send(meals);
};

const cheapMeals = async (request, response) => {
  response.send(meals.filter((meals) => meals.price < 70));
};

const largeMeals = async (request, response) => {
  response.send(meals.filter((meals) => meals.maxNumberOfGuests > 3));
};

const getMeal = async (request, response) => {
  response.send(meals[random(meals)]);
};

const getAllReservations = async (request, response) => {
  response.send(reservations);
};

const getReservation = async (request, response) => {
  response.send(reservations[random(reservations)]);
};

// this is where you will be adding your routes
app.get("/", async (request, response) =>
  response.send("Meal Sharing Web App")
);

app.get("/meals", getAllmeals);
app.get("/cheap-meals", cheapMeals);
app.get("/large-meals", largeMeals);
app.get("/meal", getMeal);
app.get("/reservations", getAllReservations);
app.get("/reservation", getReservation);

module.exports = app;
