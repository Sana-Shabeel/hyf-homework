// decided to split to make it more readable
// the code might look a bit reptetive in all the controllers but i couldn't come up with a better solution to deal with.

const add = (req, res) => {
  const { firstParam, secondParam } =
    "firstParam" in req.query ? req.query : req.body;

  const first = Array.isArray(firstParam)
    ? firstParam.map(Number).reduce((a, b) => a + b, 0)
    : Number(firstParam);

  const second = Array.isArray(secondParam)
    ? secondParam.map(Number).reduce((a, b) => a + b, 0)
    : Number(secondParam);

  if (isNaN(first) || isNaN(second)) {
    return res.status(400).json({
      Status: "failed",
      message: {
        "expected route to look like":
          "calculator/add?firstParam=2&secondParam=2",
      },
    });
  }
  const add = first + second;
  res.send(add.toLocaleString());
};

module.exports = add;
