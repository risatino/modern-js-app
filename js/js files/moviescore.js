// Array of movie scores
var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Arrays to hold movie scores
var goodMovies = [];
var okMovies = [];
var badMovies = [];

// Starting Rating total
var total = 0;

// Loop through movie scores
for (var i = 0; i < movieScore.length; i++) {
    // Add each score to total
    total += movieScore[i];

    // If the movie's rating is greater than 7, add it to the list of good movies
    if (movieScore[i] > 7) {
        goodMovies.push(i);
    }
    // If the movie's rating is between (5, 7], add it to the list of "OK" movies
    else if (movieScore[i] <= 7 && movieScore[i] > 5) {
        okMovies.push(i);
    }
    // Otherwise, if the movie's rating is less than or equal to 5, add it to the list of bad movies
    else {
        badMovies.push(i);
    }

}

// Stores length of movie ratings
var goodMovieNum = goodMovies.length;
var okMovieNum = okMovies.length;
var badMovieNum = badMovies.length;

// average score
var averageScore = total / movieScore.length;

// Print
console.log("---------")
console.log("There are", goodMovieNum, "good movies.");
console.log("There are", okMovieNum, "OK movies.");
console.log("There are", badMovieNum, "bad movies.");
console.log("The average movie rating: ", averageScore, ".");
console.log("---------")