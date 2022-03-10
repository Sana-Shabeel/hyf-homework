const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const mealsController = require("./../../../controllers/mealsController");

router
  .route("/")
  .get(mealsController.getAllmeals)
  .get(mealsController.getMaxPrice)
  .get(mealsController.getByTitle)
  .get(mealsController.getByDate)
  .get(mealsController.getByLimit);

router.route("/:id").get(mealsController.getMealById);
module.exports = router;
