window.onload = () => {
var loaded = false;
const movieListDivLatest = document.getElementById('latest-movie-list');
const movieListDiv = document.getElementById('movieList');
const modalDiv = document.body;
const moviePlayerDiv = document.getElementById('moviePlayer');
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
    const response = await fetch('https://raw.githubusercontent.com/falafox2020/falafox2020.github.io/main/movie/movie.txt');
    const data = await response.json();
    return data || [];
  }
  function displayMovieList(movies) {
    movies.forEach(movie => {
    const movieCover = getMovieCover(movie.title);
    });
  }
  function getMovieCover(title) {
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=' + title;
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let data = JSON.parse(this.responseText);
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        movie.className = 'movie-wrap';
        let yearRelease = data.results[0].release_date.split('-')[0];
        let thisYear = new Date().getFullYear();
        let lastYear = new Date().getFullYear() - 1;
        document.getElementById('release-date').innerText = '('+thisYear+ ' - ' +lastYear+')';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+data.results[0].poster_path;
        movieCover.title = data.results[0].title + ' (' + yearRelease + ')\nOverview: ' + data.results[0].overview;
        movieCover.className = 'movie-cover';
            movie.addEventListener('click', () => {
                if(!loaded){
                    loaded = true;
                    const movieModal = document.createElement('div');
                    const movieBackdrop = document.createElement('img');
                    const movieDetails = document.createElement('div');
                    const movieSypnosis = document.createElement('div');
                    const movieTitle = document.createElement('h2');
                    const movieRelease = document.createElement('p');
                    const movieOverview = document.createElement('p');
                    const closeModal = document.createElement('button');
                    closeModal.type = 'button';
                    closeModal.innerText = 'Close';
                    closeModal.className = 'close-movie';
                    movieModal.className = 'modal';
                    movieBackdrop.src = 'http://image.tmdb.org/t/p/w500/'+data.results[0].backdrop_path;
                    movieBackdrop.className = 'movie-backdrop';
                    movieDetails.className = 'movie-details';
                    movieModal.appendChild(movieBackdrop);
                    movieSypnosis.className = 'movie-syp';
                    movieTitle.innerText = data.results[0].title;
                    movieRelease.innerText = yearRelease;
                    movieOverview.innerText = data.results[0].overview;
                    movieSypnosis.appendChild(movieTitle);
                    movieSypnosis.appendChild(movieRelease);
                    movieSypnosis.appendChild(movieOverview);
                    movieDetails.appendChild(movieSypnosis);
                    movieModal.appendChild(movieDetails);
                    const iframe = document.createElement('iframe');
                    iframe.src = 'https://vidsrc.to/embed/movie/' + data.results[0].id;
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allowfullscreen', 'true');
                    movieModal.appendChild(iframe);
                    movieModal.appendChild(closeModal);
                    modalDiv.appendChild(movieModal);
                    var button = document.querySelector('button');
                        button.addEventListener('click', closeModals);
                    function closeModals(){
                        loaded = false;
                        modalDiv.removeChild(modalDiv.lastChild);
                    }
                }
            });
            if(yearRelease == thisYear || yearRelease == lastYear){
              movie.appendChild(movieCover);
              movieListDivLatest.appendChild(movie);
            } else {
              movie.appendChild(movieCover);
              movieListDiv.appendChild(movie);
            }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }
}