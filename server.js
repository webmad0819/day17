const fs = require("fs");

fs.readFile("movies.json", "utf8", function (err, movies) {
    movies = JSON.parse(movies);
    // console.log()

    fs.writeFile("moviesClean.json", JSON.stringify(movies.map(movie => {
        movie.rate = +movie.rate;
        movie.year = +movie.year;
        return movie
    })), function (err, data) {
        console.log("File was written successfully! :) namasté")
    })
})