const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id * 1 > reservations.length) {
      return res.status(404).json({
        status: "404 Not Found",
        message: "Invalid ID",
      });
    }
    const reservation = reservations.find(
      (reserve) => reserve.id === Number(req.params.id)
    );
    res.send(reservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
