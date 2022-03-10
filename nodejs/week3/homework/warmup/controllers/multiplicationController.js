const multiply = (req, res) => {
  const { firstParam, secondParam } =
    "firstParam" in req.query ? req.query : req.body;

  const first = Array.isArray(firstParam)
    ? firstParam.map(Number).reduce((a, b) => a * b, 1)
    : Number(firstParam);

  const second = Array.isArray(secondParam)
    ? secondParam.map(Number).reduce((a, b) => a * b, 1)
    : Number(secondParam);

  if (isNaN(first) || isNaN(second)) {
    return res.status(400).json({
      Status: "failed",
      message: {
        "Expected route to look like":
          "calculator/multiply?firstParam=2&secondParam=2",
      },
    });
  }
  const multiply = first * second;
  res.send(multiply.toLocaleString());
};

module.exports = multiply;
