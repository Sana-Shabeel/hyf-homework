const meals = require("./../src/backend/data/meals.json");

exports.getAllmeals = async (req, res) => {
  if (req.query.maxPrice) {
    return this.getMaxPrice(req, res);
  } else if (req.query.title) {
    return this.getByTitle(req, res);
  } else if (req.query.createdAfter) {
    return this.getByDate(req, res);
  } else if (req.query.limit) {
    return this.getByLimit(req, res);
  }
  res.send(meals);
};
exports.getMaxPrice = async (req, res) => {
  if (!Number(req.query.maxPrice)) {
    return res.status(400).json({ message: "NOT NUMBER" });
  }
  const maxPrice = parseInt(req.query.maxPrice);
  return res.send(meals.filter((meal) => meal.price < maxPrice));
};

exports.getByTitle = async (req, res) => {
  console.log(JSON.stringify(req.query));
  const title = `${req.query.title}`.toLocaleLowerCase();
  console.log(title);
  const match = meals.filter((meal) => {
    const mealTitle = meal.title.toLocaleLowerCase();
    return mealTitle.includes(title);
  });
  return res.send(match);
};
exports.getByDate = async (req, res) => {
  const createdAfter = req.query.createdAfter;
  if (!Date.parse(createdAfter)) {
    return res.status(400).send("Invalid Date");
  }
  console.log(createdAfter);
  return res.send(
    meals.filter(
      (meal) => Date.parse(meal.createdAt) > Date.parse(createdAfter)
    )
  );
};
exports.getByLimit = async (req, res) => {
  limit = Number(req.query.limit);
  if (!limit) {
    return res.status(400).send("Invalid limit");
  }
  return res.send(meals.filter((meal) => meal.id <= limit));
};
exports.getMealById = async (req, res) => {
  if (!Number(req.params.id)) {
    return res.status(400).send();
  } else if (req.params.id * 1 > meals.length) {
    return res.send("Invalid id");
  }
  const meal = meals.find((meal) => Number(req.params.id) === meal.id);
  res.send(meal);
};
