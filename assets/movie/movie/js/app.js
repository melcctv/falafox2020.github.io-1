function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = randomIntFromInterval(1, 10);
const rndInt2 = randomIntFromInterval(1, 10);
const rndInt3 = randomIntFromInterval(1, 50);

const modalDiv = document.body;
const SearchList = document.getElementById('movies-search');
const RecentViewed = document.getElementById('movies-recent');
const OnCinemas = document.getElementById('movies-cinemas');
const TrendingNow = document.getElementById('movies-trending');
const SimilarSuggestion = document.getElementById('movies-suggest');
const Recommedation = document.getElementById('movies-recommend');
const LatestMovie = document.getElementById('movies-latest');
const TopRatedMovie = document.getElementById('movies-toprated');
const PopularMovie = document.getElementById('movies-popular');
const MyMovieList = document.getElementById('movies-list');
const SeriesListDiv = document.getElementById('series-picks');
const Myrecommend = 'popcorn';
const Myresult = 'popcorntime';
var TrailerKey = '';
var OnMyList = false;
window.onload = () => {
    SearchList.style.display = 'none';
    document.getElementsByClassName('title')[0].style.display = 'none';
    const ContainerDiv = document.getElementsByClassName('container')[0];
    const HeaderDiv = document.createElement('div');
    HeaderDiv.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between">
        <div style="display: flex;align-items: center;">
            <img src="movie/img/chibi.png" width="30" height="30" />
            <a href="anime.html" style="text-decoration:none;color:#ccc">Watch Anime</a>
        </div>

        <div id="searchDiv" style="display: flex;">
            <input id="search" type="text" name="search" placeholder="Search title or keyword"/>
            <button type="button" onclick="GetSearchMovie();"><img src="movie/img/find_7072309.png" alt="find" width="20" height="20" style="box-shadow: none" /></button>
        </div>
    </div>


    `;
    HeaderDiv.id = 'header';
    HeaderDiv.style = 'display: block; visibility: visible';
    ContainerDiv.prepend(HeaderDiv);

    GetNowPlaying();
    GetTrending();
    GetSimilar();
    GetRecommendations();
    GetTopRated();
    GetPopular();
    process("my_storage");


    tvid.forEach(movies => {
         GetSeriesList(movies);
    });


} /**end of window.onload */


    /** GET NOW PLAYING DATA */
    async function GetNowPlaying(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page='+rndInt+'', options);
          const data = await response.json();
          return data || [];
    }

    GetNowPlaying()
    .then(data => {
        if(data.results && data.results.length > 0){
            NowPlaying(data.results);
        }
    })
    .catch(error => console.error('Error:', error));

    function NowPlaying(movies){
        movies.forEach(movie => {
            RenderNowPlaying(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
    }

    function RenderNowPlaying(title, id, poster, overview, date, vote){
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        
        movie.className = 'movie-wrap';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
        movieCover.title = title;
        movieCover.className = 'movie-cover';
        const movieVote = document.createElement('div');
        movieVote.className = 'movie-vote';
        movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
        movie.appendChild(movieVote);
        movie.appendChild(movieCover);
        OnCinemas.appendChild(movie);
        movie.addEventListener('click', () =>{
            OnMyList = false;
            ShowModal(title, id, poster, overview, date);
        });
    }
    /** END OF NOW PLAYING DATA */


    /** START OF TRENDING DATA */
    async function GetTrending(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
          const data = await response.json();
          return data || [];
    }

    GetTrending()
    .then(data => {
        if(data.results && data.results.length > 0){
            Trending(data.results);
        }
    })
    .catch(error => console.error('Error:', error));

    function Trending(movies){
        movies.forEach(movie => {
            RenderTrending(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
    }

    function RenderTrending(title, id, poster, overview, date, vote){
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        movie.className = 'movie-wrap';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
        movieCover.title = title;
        movieCover.className = 'movie-cover';
        const movieVote = document.createElement('div');
        movieVote.className = 'movie-vote';
        movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
        movie.appendChild(movieVote);
        movie.appendChild(movieCover);
        TrendingNow.appendChild(movie);
        movie.addEventListener('click', () =>{
            OnMyList = false;
            ShowModal(title, id, poster, overview, date);
        });
    }
    /** END OF TRENDING DATA */

    /** START OF SIMILAR DATA */
    async function GetSimilar(){
        document.getElementById('last_title').innerText = getStorageValue('movie_title');
        var movie_id = getStorageValue('movie_id');
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/similar?language=en-US&page='+rndInt3+'', options);
          const data = await response.json();
          return data || [];
    }

    GetSimilar()
    .then(data => {
        if(data.results && data.results.length > 0){
            Similar(data.results);
        } else {
            document.getElementsByClassName('title')[4].style.display = 'none';
            document.getElementById('movies-suggest').style.display = 'none';
        }
    })
    .catch(error => console.error('Error:', error));

    function Similar(movies){
        movies.forEach(movie => {
            RenderSimilar(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
    }

    function RenderSimilar(title, id, poster, overview, date, vote){
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        movie.className = 'movie-wrap';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
        movieCover.title = title;
        movieCover.className = 'movie-cover';
        const movieVote = document.createElement('div');
        movieVote.className = 'movie-vote';
        movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
        movie.appendChild(movieVote);
        movie.appendChild(movieCover);
        SimilarSuggestion.appendChild(movie);
        movie.addEventListener('click', () =>{
            OnMyList = false;
            ShowModal(title, id, poster, overview, date);
        });
    }
    /** END OF SIMILAR DATA */

    /** START OF RECOMMEND DATA */
    async function GetRecommendations(){
        var movie_id = getStorageValue('movie_id');
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/recommendations?language=en-US&page=1', options);
          const data = await response.json();
          //console.log(data)
          return data || [];
    }

    GetRecommendations()
    .then(data => {
        if(data.results && data.results.length > 0){
            Recommend(data.results);
        } else {
            document.getElementsByClassName('title')[5].style.display = 'none';
            document.getElementById('movies-recommend').style.display = 'none';
        }
    })
    .catch(error => console.error('Error:', error));

    function Recommend(movies){
        movies.forEach(movie => {
            RenderRecommend(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
    }

    function RenderRecommend(title, id, poster, overview, date, vote){
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        movie.className = 'movie-wrap';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
        movieCover.title = title;
        movieCover.className = 'movie-cover';
        const movieVote = document.createElement('div');
        movieVote.className = 'movie-vote';
        movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
        movie.appendChild(movieVote);
        movie.appendChild(movieCover);
        Recommedation.appendChild(movie);
        movie.addEventListener('click', () =>{
            OnMyList = false;
            ShowModal(title, id, poster, overview, date);
        });
    }
    /** END OF RECOMMEND DATA */
    
    /** START OF TOP RATED DATA */
    async function GetTopRated(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page='+rndInt+'&region=ph', options);
          const data = await response.json();
          return data || [];
    }

    GetTopRated()
    .then(data => {
        if(data.results && data.results.length > 0){
            TopRated(data.results);
        }
    })
    .catch(error => console.error('Error:', error));

    function TopRated(movies){
        movies.forEach(movie => {
            RenderTopRatedNow(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
    }

    function RenderTopRatedNow(title, id, poster, overview, date, vote){
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        movie.className = 'movie-wrap';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
        movieCover.title = title;
        movieCover.className = 'movie-cover';
        const movieVote = document.createElement('div');
        movieVote.className = 'movie-vote';
        movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
        movie.appendChild(movieVote);
        movie.appendChild(movieCover);
        TopRatedMovie.appendChild(movie);
        movie.addEventListener('click', () =>{
            OnMyList = false;
            ShowModal(title, id, poster, overview, date);
        });
    }
    /** END OF RATED DATA */


    /** START OF POPULAR DATA */
    async function GetPopular(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page='+rndInt2+'&region=ph', options);
          const data = await response.json();
          return data || [];
    }

    GetPopular()
    .then(data => {
        if(data.results && data.results.length > 0){
            Popular(data.results);
        }
    })
    .catch(error => console.error('Error:', error));

    function Popular(movies){
        movies.forEach(movie => {
            RenderPopularNow(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
    }

    function RenderPopularNow(title, id, poster, overview, date, vote){
        const movie = document.createElement('div');
        const movieCover = document.createElement('img');
        movie.className = 'movie-wrap';
        movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
        movieCover.title = title;
        movieCover.className = 'movie-cover';
        const movieVote = document.createElement('div');
        movieVote.className = 'movie-vote';
        movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
        movie.appendChild(movieVote);
        movie.appendChild(movieCover);
        PopularMovie.appendChild(movie);
        movie.addEventListener('click', () =>{
            OnMyList = false;
            ShowModal(title, id, poster, overview, date);
        });
    }
    /** END OF POPULAR DATA */

/** START OF SEARCH DATA */
function GetSearchMovie(){
    var SearchQuery = document.getElementById('search').value;
    SearchList.style.display = 'block';
    document.getElementsByClassName('title')[0].style.display = 'block';

    if(SearchList.innerHTML != ''){
        while (SearchList.firstChild) {
            SearchList.removeChild(SearchList.lastChild);
          }
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let data = JSON.parse(this.responseText);
        SearchResults(data.results);
    };

    xhttp.open('GET', 'https://api.themoviedb.org/3/search/movie?query='+SearchQuery+'&include_adult=false&language=en-US&page=1', true);
        xhttp.setRequestHeader('accept', 'application/json');
        xhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI');
    xhttp.send();
}

function SearchResults(movies){
        movies.forEach(movie => {
            RenderSearchResults(movie.title, movie.id, movie.poster_path, movie.overview, movie.release_date, movie.vote_average);
        });
   
}

function RenderSearchResults(title, id, poster, overview, date, vote){
    const movie = document.createElement('div');
    const movieCover = document.createElement('img');
    movie.className = 'movie-wrap';
    movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
    movieCover.title = title;
    movieCover.className = 'movie-cover';
    const movieVote = document.createElement('div');
    movieVote.className = 'movie-vote';
    movieVote.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg><span>&nbsp;'+parseInt(vote)+'/10</span>';
    movie.appendChild(movieVote);
    movie.appendChild(movieCover);
    SearchList.appendChild(movie);
    movie.addEventListener('click', () =>{
        OnMyList = false;
        ShowModal(title, id, poster, overview, date);
    });
}

/** END OF SEARCH DATA */

function lsset(storage_name, value) {
    RenderMyList(value.split('#')[0], value.split('#')[1], value.split('#')[2], value.split('#')[3], value.split('#')[4])
}
function RenderMyList(title, id, poster, overview, date){
    const movie = document.createElement('div');
    const movieCover = document.createElement('img');
    movie.className = 'movie-wrap';
    movieCover.src = 'http://image.tmdb.org/t/p/w500/'+poster;
    movieCover.title = title;
    movieCover.className = 'movie-cover';
    movie.appendChild(movieCover);
    MyMovieList.appendChild(movie);
    movie.addEventListener('click', () =>{
        OnMyList = true;
        ShowModal(title, id, poster, overview, date);
    });
}


function GetSeriesList(id) {
    const req = 'GET';
    const url = `https://api.themoviedb.org/3/tv/${id}/images?include_image_language=en&language=en`;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      let data = JSON.parse(this.responseText);
      //console.log(data.id);
      let series_image = data.posters[0].file_path;
      let series_id = data.id;
      RenderSeriesList(series_id, series_image)
      
    };
    xhttp.open(req, url, true);
    xhttp.setRequestHeader('accept', 'application/json');
    xhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI');
    xhttp.send();
  }
  
  function RenderSeriesList(id, image) {
    const TvCover = document.createElement('img');
    TvCover.src = 'http://image.tmdb.org/t/p/w500' + image;
    TvCover.alt = '#';
    TvCover.className = 'movie-wrap';
    SeriesListDiv.appendChild(TvCover);

    TvCover.addEventListener('click', () => {
        var req = 'GET';
        var url = 'https://api.themoviedb.org/3/tv/'+id+'?language=en-US';
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            let data = JSON.parse(this.responseText);
            //console.log(data.seasons);
            ShowSeriesModal(data.name, data.id, image, data.overview, data.first_air_date, data.seasons);
        };
        xhttp.open(req, url, true);
        xhttp.setRequestHeader('accept', 'application/json');
        xhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI');
        xhttp.send();    
    });
  }

/**MODAL MOVIES */
function ShowModal(title, id, poster, overview, date){
    
    setStorageValue('movie_id', id);
    setStorageValue('movie_title', title);
    const movieModal = document.createElement('div');
    const moviePlayer = document.createElement('div');
    const modalContent = document.createElement('div');
    const movieBackdrop = document.createElement('img');
    const movieDetails = document.createElement('div');
    const movieSypnosis = document.createElement('div');
    const movieTitle = document.createElement('h2');
    const movieRelease = document.createElement('p');
    const movieOverview = document.createElement('p');
    const playButton = document.createElement('button');
    const closeModal = document.createElement('button');
    const addToMyList = document.createElement('button');
    const removeToMyList = document.createElement('button');

    modalContent.className = 'modal-content-wrap';
    moviePlayer.className = 'movie_player';

    closeModal.type = 'button';
    closeModal.innerText = 'Close';
    closeModal.id = 'close-modal';

    addToMyList.type = 'button';
    addToMyList.innerText = 'Add to my list';
    addToMyList.id = 'add-list';

    removeToMyList.type = 'button';
    removeToMyList.innerText = 'Remove from my list';
    removeToMyList.id = 'remove-list';

    movieModal.className = 'modal';
    movieBackdrop.src = 'http://image.tmdb.org/t/p/w500/'+poster;
    movieBackdrop.className = 'movie-backdrop';
    movieDetails.className = 'movie-details';
    movieModal.appendChild(movieBackdrop);
    movieSypnosis.className = 'movie-syp';
    movieTitle.innerText = title;
    movieRelease.innerText = date.split('-')[0];
    movieOverview.innerText = overview;
    movieSypnosis.appendChild(movieTitle);
    movieSypnosis.appendChild(movieRelease);
    movieSypnosis.appendChild(movieOverview);

    const req = 'GET';
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
           // console.log(element);
            if(element.name.includes('Trailer')){

                if(!document.getElementById('trailer')){
                    const iframe = document.createElement('iframe');
                    iframe.id = 'trailer';
                    iframe.src = 'https://www.youtube.com/embed/' + element.key +'?enablejsapi=1&origin=http://youtube.com';
                    iframe.title = 'YouTube video player'
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allowfullscreen', 'true');
                    iframe.setAttribute('autoplay', 'true');
                    moviePlayer.appendChild(iframe);
                }

            }
            
        } 
    }
    xhttp.open(req, url, true);
    xhttp.setRequestHeader('accept', 'application/json');
    xhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2E1NDkyMDNlYmNlOGY2ZTFjOTMyNjQ1MzYyMjNlMCIsInN1YiI6IjY1ODNkMzI2MTgwZGVhNTQzZThiZThhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAc27W_LNc2uGh_9Pcl13c7_f9Mv_YGeYvWVfhE1NBI');
    xhttp.send();

    playButton.innerText = 'Watch Now';
    playButton.id = 'play_button';
    
    movieDetails.appendChild(movieSypnosis);
    modalContent.appendChild(movieDetails);
    modalContent.appendChild(playButton);
    modalContent.appendChild(closeModal);
    modalContent.appendChild(addToMyList);
    modalContent.appendChild(removeToMyList);

    if(!OnMyList){
        removeToMyList.style.display = 'none';
    } else {
        addToMyList.style.display = 'none';
    }
    movieModal.appendChild(moviePlayer);
    movieModal.appendChild(modalContent);
    modalDiv.appendChild(movieModal);


    var CloseButton = document.querySelector('#close-modal');
    CloseButton.addEventListener('click', () => {
        modalDiv.removeChild(modalDiv.lastChild);
    });


    var RemoveListButton = document.querySelector('#remove-list');
    RemoveListButton.addEventListener('click', () => {
            if (confirm("Are you sure?") == true) {
                lsdel('my_storage', title + '#' + id + '#' + poster + '#' + overview + '#' + date);
                setTimeout(function(){
                    modalDiv.removeChild(modalDiv.lastChild);
                }, 500);
            } else {
                console.log('false');
            }
    });

    var AddListButton = document.querySelector('#add-list');
    AddListButton.addEventListener('click', () => {
        lsadd('my_storage', title + '#' + id + '#' + poster + '#' + overview + '#' + date);
        MyMovieList.innerHTML = '';
        MyMovieList.innerText = '';
        process("my_storage");
        
        setTimeout(function(){
            modalDiv.removeChild(modalDiv.lastChild); 
        }, 500);
    });

    var PlayNowButton = document.querySelector('#play_button');
        PlayNowButton.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://vidsrc.to/embed/movie/' + id;
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            moviePlayer.removeChild(moviePlayer.firstChild)
            moviePlayer.prepend(iframe);
            PlayNowButton.setAttribute('disabled', 'true')
    
    });


}
/**END OF MOVIE MODAL */

/** SERIES MODAL */
function ShowSeriesModal(title, id, poster, overview, date, seasons){
    setStorageValue('movie_id', id);
    setStorageValue('movie_title', title);

    const movieModal = document.createElement('div');
    const modalContent = document.createElement('div');
    const movieBackdrop = document.createElement('img');
    const movieDetails = document.createElement('div');
    const movieSypnosis = document.createElement('div');
    const movieTitle = document.createElement('h2');
    const movieRelease = document.createElement('p');
    const movieOverview = document.createElement('p');
    const closeModal = document.createElement('button');
    const addToMyList = document.createElement('button');
    const removeToMyList = document.createElement('button');
    const playerDiv = document.createElement('div');
    const iframe = document.createElement('iframe');
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'movie-btn-group';
    const seasonGroup = document.createElement('div');
    seasonGroup.id = 'season-div';
    const episodeDiv = document.createElement('div');
    episodeDiv.id = 'episode-div';

    modalContent.className = 'modal-content-wrap';

    closeModal.type = 'button';
    closeModal.innerText = 'Close';
    closeModal.id = 'close-modal';

    addToMyList.type = 'button';
    addToMyList.innerText = 'Add to my list';
    addToMyList.id = 'add-list';

    removeToMyList.type = 'button';
    removeToMyList.innerText = 'Remove from my list';
    removeToMyList.id = 'remove-list';

    movieModal.className = 'modal';
    movieBackdrop.src = 'http://image.tmdb.org/t/p/w500/'+poster;
    movieBackdrop.className = 'movie-backdrop';
    movieDetails.className = 'movie-details';
    movieModal.appendChild(movieBackdrop);
    movieSypnosis.className = 'movie-syp';
    movieTitle.innerText = title;
    movieRelease.innerText = date.split('-')[0];
    
    movieSypnosis.appendChild(movieTitle);
    movieSypnosis.appendChild(movieRelease);

    movieDetails.appendChild(movieSypnosis);
    modalContent.appendChild(movieDetails);
    buttonGroup.appendChild(seasonGroup);
    buttonGroup.appendChild(episodeDiv);
    modalContent.appendChild(buttonGroup);
    modalContent.prepend(playerDiv);

    iframe.src = `https://vidsrc.to/embed/tv/${id}/1/1`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    playerDiv.appendChild(iframe);
    
    seasons.forEach(seasonsCount => {
        const SeasonButton = document.createElement('button');
        SeasonButton.type = 'button';
        SeasonButton.className = 'season-btn';
        SeasonButton.innerText = seasonsCount.name;
        seasonGroup.appendChild(SeasonButton);
        SeasonButton.addEventListener('click', () => {
            let episodes = seasonsCount.episode_count;
            movieOverview.innerText = seasonsCount.overview;
            if(episodeDiv.innerHTML != ''){
                while (episodeDiv.firstChild) {
                    episodeDiv.removeChild(episodeDiv.lastChild);
                  }
            }
            for (let i = 0; episodes > i; i++) {
                let x = i+1;
                const episodeButton = document.createElement('button');
                episodeButton.type = 'button';
                episodeButton.className = 'episode-btn';
                episodeButton.innerText = 'Ep ' + x;
                episodeButton.addEventListener('click', () => {
                    if(playerDiv.innerHTML != ''){
                        while (playerDiv.firstChild) {
                            playerDiv.removeChild(playerDiv.lastChild);
                          }
                    }
                    iframe.src = `https://vidsrc.to/embed/tv/${id}/${seasonsCount.season_number}/${x}`;
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('allowfullscreen', 'true');
                    playerDiv.prepend(iframe);
                })
                episodeDiv.appendChild(episodeButton);
                movieSypnosis.appendChild(movieOverview);
            }
        });
    });
    
    modalContent.appendChild(closeModal);
    modalContent.appendChild(removeToMyList);
    if(!OnMyList){
        removeToMyList.style.display = 'none';
    } else {
        addToMyList.style.display = 'none';
    }
    movieModal.appendChild(modalContent);
    modalDiv.appendChild(movieModal);

    var CloseButton = document.querySelector('#close-modal');
    CloseButton.addEventListener('click', () => {
        modalDiv.removeChild(modalDiv.lastChild);
    });

    var RemoveListButton = document.querySelector('#remove-list');
    RemoveListButton.addEventListener('click', () => {
            if (confirm("Are you sure?") == true) {
                lsdel('my_storage', title + '#' + id + '#' + poster + '#' + overview + '#' + date);
                setTimeout(function(){
                    modalDiv.removeChild(modalDiv.lastChild);
                }, 500);
            } else {
                console.log('false');
            }
    });
    var AddListButton = document.querySelector('#add-list');
    AddListButton.addEventListener('click', () => {
        lsadd('my_storage', title + '#' + id + '#' + poster + '#' + overview + '#' + date);
        MyMovieList.innerHTML = '';
        MyMovieList.innerText = '';
        process("my_storage");
        
        setTimeout(function(){
            modalDiv.removeChild(modalDiv.lastChild); 
        }, 500);
    });
}
/** END OF SERIES MODAL */





var limit = 10;
function lsadd(storage_name, value, limit) {
    var storage_list = [];
    storage_list = JSON.parse(getStorageValue(storage_name)) || [];
    var storaged = JSON.parse(getStorageValue(storage_name));
    if (getStorageValue(storage_name) === null) {
        storage_list.push(value);
        setStorageValue(storage_name, JSON.stringify(storage_list));
        process("my_storage");
    } else {
        if (storaged.indexOf(value) == -1) {
            var count = storaged.length;
            if (count >= limit) {
                storaged.splice(0, 1);
                setStorageValue(storage_name, JSON.stringify(storaged));
                storage_list.push(value);
            } else {
                storage_list.push(value);
                setStorageValue(storage_name, JSON.stringify(storage_list));
            }
            process("my_storage");
        } else {
            alert('its already added!');
        }
    }
}

function lsdel(storage_name, value) {
    if (getStorageValue(storage_name) === null) { } else {
        var ls_data = JSON.parse(getStorageValue(storage_name));
        var index = ls_data.indexOf(value);
        if (index == -1) { } else {
            ls_data.splice(index, 1);
            setStorageValue(storage_name, JSON.stringify(ls_data));
            MyMovieList.innerHTML = '';
            MyMovieList.innerText = '';
            process("my_storage");
        }
    }
}

function process(storage_name) {
    if (getStorageValue(storage_name) === null) {
        document.getElementById('movies-list').style.display = 'none';
        document.getElementsByClassName('title')[1].style.display = 'none';
    } else {
        var storageList = JSON.parse(window.localStorage.getItem(storage_name));
        for (var i = 0, len = storageList.length; i < len; i++) {
            lsset('my_storage', storageList[i]);
        }
    }
}

function setStorageValue(key, value) {
    if (localStorage != null) {
        localStorage.setItem(key, value);
    } else {
        setCookie(key, value, 364);
    }
}
function removeStorageValue(key) {
    if (localStorage != null) {
        localStorage.removeItem(key);
    } else {
        eraseCookie(key);
    }
}
function getStorageValue(key) {
    if (localStorage != null) {
        return localStorage.getItem(key);
    } else {
        return getCookie(key);
    }
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

