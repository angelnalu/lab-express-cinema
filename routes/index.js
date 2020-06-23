const express = require('express');
const router = express.Router();

const Movie = require ('../models/Movie.model.js')

const hbs     = require('hbs');
const app     = express();
const path    = require('path')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));



/* GET home page */
router.get('/', (req, res, next) =>
res.render('index'));


/* Get Movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(Movies => {
    console.log(Movies)
    res.render('movies', { movies: Movies });
      })
    .catch(error => {
    console.log('error', error);
      })
});

/* Get Movies ID */

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then((movie) => {
    // res.send(movie);
    res.render("movieDetails", { movie: movie });
  });
});

module.exports = router;
