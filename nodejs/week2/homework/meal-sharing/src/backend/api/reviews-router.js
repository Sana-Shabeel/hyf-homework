const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (req, res) => {
  try {
    res.send(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.params.id * 1 > reviews.length) {
      return res.status(404).json({
        status: "404 Not Found",
        message: "Invalid ID",
      });
    }
    const review = reviews.find((rev) => rev.id === Number(req.params.id));
    res.send(review);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
