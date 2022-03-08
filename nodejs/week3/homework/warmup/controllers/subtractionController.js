const subtraction = (req, res) => {
  const { firstParam, secondParam } =
    "firstParam" in req.query ? req.query : req.body;

  // get first and second in one array

  const allNums = [];
  allNums.push(firstParam, secondParam);
  const result = allNums
    .flat(2)
    .map(Number)
    .reduce((prev, curr) => prev - curr);

  if (isNaN(result)) {
    return res.status(400).json({
      Status: "failed",
      message: {
        "expected route to look like":
          "calculator/subtract?firstParam=2&secondParam=2",
      },
    });
  }
  res.send(result.toLocaleString());
};

module.exports = subtraction;
