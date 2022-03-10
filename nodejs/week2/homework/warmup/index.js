const express = require("express");
const app = express();

app.get("/numbers/add", (req, res) => {
  const { first, second } = req.query;
  res.send(`${first} + ${second} = ${Number(first) + Number(second)}`);
});
app.get("/numbers/multiply", (req, res) => {
  const { first, second } = req.query;
  res.send(`${first} * ${second} = ${Number(first) * Number(second)}`);
});

app.listen(8000, () => console.log(`Calculator:listening on port 8000`));
