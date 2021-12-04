let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

numbers.forEach((num) => {
  if (num % 2 !== 0) {
    newNumbers.push(num * 2);
  }
});

const oddNums = numbers.filter((num) => num % 2 !== 0);
const oddTimes2 = oddNums.map((odd) => odd * 2);
console.log(oddNums);
console.log(oddTimes2);
newNumbers.push(oddTimes2);
console.log(newNumbers);

// Create an array of movies containing the movies with a short title (you define what short means)
const shortTitles = movies
  .filter((titles) => {
    movies.forEach((x) => x.title);
    return titles.title.length < 5;
  })
  .map((x) => x.title);
console.log(shortTitles);

// Create an array of movie titles with long movie titles

const longTitles = movies
  .filter((titles) => {
    movies.forEach((longT) => longT.title);
    return titles.title.length > 5;
  })
  .map((x) => x.title);
console.log(longTitles);

// Count the number of movies made between 1980-1989 (including both the years)

const numOfMovies = movies
  .filter((a) => {
    if (a.year >= 1980 && a.year <= 1989) {
      return a;
    }
  })
  .map((year) => year.year);
console.log("Number of movies made between 1980-1989 " + numOfMovies.length);

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const newTag = movies.map((tag) => {
  if (tag.rating >= 7) {
    tag.tag = "Good";
  } else if (tag.rating >= 4 && tag.rating < 7) {
    tag.tag = "Average";
  } else if (tag.rating < 4) {
    tag.tag = "Bad";
  }
  if (Boolean) return;
});

console.log(movies);

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const movieRating = movies
  .filter((rating) => rating.rating)
  .map((onlyRating) => "Rating: " + onlyRating.rating);

console.log(movieRating);

const numOfMoviesContains = [];
const all = [];
const moviesContains = movies.forEach((x) => {
  if (x.title.includes("Surfer")) {
    numOfMoviesContains.push(x);
  } else if (x.title.includes("Alien")) {
    numOfMoviesContains.push(x);
  } else if (x.title.includes("Benjamin")) {
    numOfMoviesContains.push(x);
  } else if (x.title.includes("Alien") && x.title.includes("Benjamin")) {
    all.push(x);
  }
});
console.log(numOfMoviesContains);

/*
Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
*/
const duplicated = [];
const movieString = movies.filter((a) => a.title).map((m) => m.title);

const duplicates = movieString.map((x) => x.split(" "));

for (const n of duplicates) {
  n.filter((k, index) => {
    if (n.indexOf(k) !== index) duplicated.push(n);
  });
}
console.log(duplicated);
console.log(movieString);
// const movieTitleLength = movieString.length;
// console.log(movieTitleLength);
const average =
  movieString.reduce((pv, cv) => {
    return pv + cv.length;
  }, movieString[0].length) / movieString.length;
console.log("Average rating of all movies " + average);
