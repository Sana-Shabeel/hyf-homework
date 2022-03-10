const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const addition = require("./controllers/additionController");
const multiplication = require("./controllers/multiplicationController");
const subtraction = require("./controllers/subtractionController");
const division = require("./controllers/divisionController");

app.get("/", (req, res) => res.send("nodejs week3 homework"));
app.get("/calculator/add", addition);
app.get("/calculator/multiply", multiplication);
app.get("/calculator/subtract", subtraction);
app.get("/calculator/divide", division);
// post
app.post("/calculator/add", addition);
app.post("/calculator/multiply", multiplication);
app.post("/calculator/subtract", subtraction);
app.post("/calculator/divide", division);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
