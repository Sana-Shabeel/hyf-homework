const division = (req, res) => {
  const { firstParam, secondParam } =
    "firstParam" in req.query ? req.query : req.body;

  const allNums = [];
  allNums.push(firstParam, secondParam);
  const divide = allNums
    .flat(2)
    .map(Number)
    .reduce((prev, curr) => prev / curr);

  if (isNaN(divide)) {
    return res.status(400).json({
      Status: "failed",
      message: {
        "Expected route to look like":
          "calculator/subtract?firstParam=2&secondParam=2",
      },
    });
  }
  res.send(divide.toLocaleString());
};

module.exports = division;
