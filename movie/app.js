// JavaScript
window.onload = function() {
  const movieListDiv = document.getElementById('movieList');
  const moviePlayerDiv = document.getElementById('moviePlayer');

  // Fetch the list of latest movies
  fetchLatestMovies()
    .then(movies => {
      if (movies && movies.length > 0) {
        displayMovieList(movies);
      } else {
        console.error('Error: No movies found');
      }
    })
    .catch(error => console.error('Error:', error));

  async function fetchLatestMovies() {
    const response = await fetch('https://raw.githubusercontent.com/falafox2020/falafox2020.github.io/main/movie/toppicks.txt');
    const data = await response.json();
    return data || [];
  }

  function displayMovieList(movies) {
    movies.forEach(movie => {
      const movieButton = createMovieButton(movie.title);
      movieButton.addEventListener('click', () => {
        streamMovie(movie.link);
      });
      movieListDiv.appendChild(movieButton);
    });
  }

  function createMovieButton(title) {
    const movieButton = document.createElement('button');
    movieButton.textContent = title;
	movieButton.className = 'movie-btn';
    return movieButton;
  }

  function streamMovie(imdb) {
	const videoFrame = document.createElement('video');
	videoFrame.setAttribute("controls","controls");
	videoFrame.setAttribute("autoplay","true");
	const videoSource = document.createElement('source');
	videoSource.src = imdb;
	videoSource.type = 'video/mp4';
    moviePlayerDiv.innerHTML = '';
	videoFrame.appendChild(videoSource);
	moviePlayerDiv.appendChild(videoFrame);
  }
};
