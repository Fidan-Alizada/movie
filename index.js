
// document.addEventListener("DOMContentLoaded", function () {
//     const apiKey = "7e3d70e2d0fc85df0bfb0113024f1a15";
//     const query = "netflix";
//     const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

//     async function fetchMovies() {
//         try {
//             const response = await fetch(apiUrl);
//             const data = await response.json();
//             displayMovies(data.results);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     function displayMovies(movies) {
//         const movieList = document.getElementById("movie-list");
//         movies.forEach(movie => {
//             if (movie.backdrop_path !== null) {
//                 const movieDiv = document.createElement("div");
//                 movieDiv.classList.add("movie");
//                 const movieImage = document.createElement("img");
//                 movieImage.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
//                 movieImage.alt = movie.title;
//                 const movieContent = document.createElement("div");
//                 movieContent.classList.add("movie-content");
//                 const movieTitle = document.createElement("h2");
//                 movieTitle.classList.add("movie-title");
//                 movieTitle.textContent = movie.title;
//                 const movieDetails = document.createElement("p");
//                 movieDetails.classList.add("movie-details");
//                 movieDetails.innerHTML = `
//                     <p>Rating:${movie.vote_average}<p>
//                     <p> ${movie.release_date}</p>
//                 `;
//                 movieContent.appendChild(movieTitle);
//                 movieContent.appendChild(movieDetails);
//                 movieDiv.appendChild(movieImage);
//                 movieDiv.appendChild(movieContent);
//                 movieList.appendChild(movieDiv);
//             }
//         });
//     }
//     fetchMovies();
// });
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "7e3d70e2d0fc85df0bfb0113024f1a15";

    async function fetchMovies(query) {
        try {
            const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    function displayMovies(movies) {
        const movieList = document.getElementById("movie-list");
        movieList.innerHTML = ''; // Clear previous search results
        movies.forEach(movie => {
            if (movie.backdrop_path !== null) {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("movie");
                const movieImage = document.createElement("img");
                movieImage.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
                movieImage.alt = movie.title;
                const movieContent = document.createElement("div");
                movieContent.classList.add("movie-content");
                const movieTitle = document.createElement("h2");
                movieTitle.classList.add("movie-title");
                movieTitle.textContent = movie.title;
                const movieDetails = document.createElement("p");
                movieDetails.classList.add("movie-details");
                movieDetails.innerHTML = `
                    <p>Rating: ${movie.vote_average}</p>
                    <p>${movie.release_date}</p>
                `;
                movieContent.appendChild(movieTitle);
                movieContent.appendChild(movieDetails);
                movieDiv.appendChild(movieImage);
                movieDiv.appendChild(movieContent);
                movieList.appendChild(movieDiv);
            }
        });
    }

    window.searchMovies = function() {
        const query = document.getElementById("search-input").value;
        fetchMovies(query);
    };
});