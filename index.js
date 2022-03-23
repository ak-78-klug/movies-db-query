const mongoose = require("mongoose");

// Importing the model
const Movie = require("./models/movie");

// Connecting to the database
mongoose
  .connect(
    "mongodb+srv://asif:k1ceE4YXn65bNji8@cluster0.5pxz2.mongodb.net/moviesDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection successful...."))
  .catch((err) => console.error(err));

// Fetching data/movies from the database
const getData = async () => {
  const result = await Movie.find();
  console.log(result);
};

// Adding data/movies to the database
const addMovies = (movie) => {
  var movie1 = new Movie(movie);

  // save model to database
  movie1.save(function (err, movie) {
    if (err) return console.log(err);
    console.log(movie.name + " saved to movies collection.");
  });
};

// Deleting a movie from the database
const deleteMovie = () => {
  Movie.findOneAndDelete({ name: "Lagaan" }, function (err) {
    if (err) console.log(err);
    console.log("Lagaan is deleted successfully.");
  });
};

// Updating movie in a database
const updateMovie = () => {
  Movie.findOneAndUpdate(
    { name: "Lagaan" },

    { $set: { actor: "Salmaan Khan" } },

    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated successfully!");

        console.log(doc);
      }
    }
  );
};

addMovies({
  name: "Bachhan Pandey",
  actor: "Akshay Kumar",
  actress: "Kriti Sanon",
  year: 2022,
  director: "Sajid Nadiadwala",
});

getData();
updateMovie();
deleteMovie();
