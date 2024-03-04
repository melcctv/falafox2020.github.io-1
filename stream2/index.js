import { Options, BaseURL, NowPlayingEndpoint, TrendingEndpoint, TopratedEndpoint, PopularEndpoint, Poster, QS, AddElement, convertMinsToHrsMins, convertYear, convertWholeNumber, IconCalendar, IconClock, IconStar, fallbackMoviePoster } from './api/movieapi.js';

// Movie divs
const TrendingDiv = AddElement('div');
TrendingDiv.innerHTML = `
<h3 class="div-label">Trending</h3>
<div id="trending" class="movie-group"></div>
`;
QS('#root').appendChild(TrendingDiv);

const NowplayingDiv = AddElement('div');
NowplayingDiv.innerHTML = `
<h3 class="div-label">Users top picks</h3>
<div id="nowplaying" class="movie-group"></div>
`;
QS('#root').appendChild(NowplayingDiv);

const TopratedDiv = AddElement('div');
TopratedDiv.innerHTML = `
<h3 class="div-label">Top rated</h3>
<div id="toprated" class="movie-group"></div>
`;
QS('#root').appendChild(TopratedDiv);

const PopularDiv = AddElement('div');
PopularDiv.innerHTML = `
<h3 class="div-label">Popular</h3>
<div id="popular" class="movie-group"></div>
`;
QS('#root').appendChild(PopularDiv);

// Fetch Trending
async function FetchTrending(){
    const response = await fetch(TrendingEndpoint, Options);
    const data = response.json();
    return data;
}
FetchTrending()
.then(data => data.results)
.then(movie => {
    for(let i=0;i<movie.length;i++){
        //console.log(movie[i].title)
        RenderMovieCover(movie[i].id, Poster+movie[i].poster_path, '#trending');
    }
})
.catch(error => console.log(error))

// Fetch Now playing
async function FetchNowplaying(){
    const response = await fetch(NowPlayingEndpoint, Options);
    const data = response.json();
    return data;
}
FetchNowplaying()
.then(data => data.results)
.then(movie => {
    for(let i=0;i<movie.length;i++){
        //console.log(movie[i].title)
        RenderMovieCover(movie[i].id, Poster+movie[i].poster_path, '#nowplaying');
    }
})
.catch(error => console.log(error))

// Fetch Top rated
async function FetchToprated(){
    const response = await fetch(TopratedEndpoint, Options);
    const data = response.json();
    return data;
}
FetchToprated()
.then(data => data.results)
.then(movie => {
    for(let i=0;i<movie.length;i++){
        //console.log(movie[i].title)
        RenderMovieCover(movie[i].id, Poster+movie[i].poster_path, '#toprated');
    }
})
.catch(error => console.log(error))

// Fetch Popular
async function FetchPopular(){
    const response = await fetch(PopularEndpoint, Options);
    const data = response.json();
    return data;
}
FetchPopular()
.then(data => data.results)
.then(movie => {
    for(let i=0;i<movie.length;i++){
        //console.log(movie[i].title)
        RenderMovieCover(movie[i].id, Poster+movie[i].poster_path, '#popular');
    }
})
.catch(error => console.log(error))


// Dynamic fetch 
function RenderMovieCover(id, poster, position){
    //console.log(id + ' : ' + poster + ' : ' + position)
    const MoviePoster = AddElement('div');
    MoviePoster.innerHTML = `<img src="${poster}" class="posters" />`;
    MoviePoster.addEventListener('click', () => {

        QS('body').style.overflow = 'hidden';
        // Fetch selected movie
        FetchSelectedMovie(id)
        .then(data => {
            //console.log(data);

            if(QS('.modal')){
                QS('body').removeChild(QS('body').lastChild)
            }
            const MovieModal = AddElement('div');
            MovieModal.className = 'modal';
            MovieModal.innerHTML = `
            
                <div class="movie-details">

                    <div>
                        <img src=${Poster+data.poster_path} class="selected-poster" /><br>
                        <small class="movie-genres">Genres: ${data.genres[0].name}, ${data.genres[1].name}</small>
                    </div>
                    <div class="movie-details-text">
                        <h3 class="movie-title">${data.title}</h3>
                        <div class="movie-stats">
                            <div class="movie-stats-group">${IconCalendar}${convertYear(data.release_date)}</div>
                            <div class="movie-stats-group">${IconClock}${convertMinsToHrsMins(data.runtime)}</div>
                            <div class="movie-stats-group">${IconStar}${convertWholeNumber(data.vote_average)}</div>
                        <div>
                    </div>
                </div>
                <div class="movie-details-text">
                    <p class="sypnosis">${data.overview}</p>
                </div>
                <div class="modal-btn-group">
                    <button type="button" class="btn primary" id="playMovieBtn">Watch now</button>
                    <button type="button" class="btn secondary" id="trailerBtn">Trailer</button>
                    <button type="button" class="btn secondary" id="closeModal">Close</button>
                </div>

            `;
            QS('body').appendChild(MovieModal);

            const PlayBtn = QS('#playMovieBtn');
            PlayBtn.addEventListener('click', () => {
                const PlayMovieModal = AddElement('div');
                PlayMovieModal.className = 'modal';
                PlayMovieModal.id = 'play-movie-modal';
                PlayMovieModal.innerHTML = `
                    <div><p>${data.title}</p> <small>${convertYear(data.release_date)} | ${convertMinsToHrsMins(data.runtime)} | ${data.genres[0].name}, ${data.genres[1].name}</small></div>
                    <iframe src="https://vidsrc.to/embed/movie/${id}"></iframe>
                    <div>
                        <button type="button" id="closePlayMovierModal" class="btn primary">Close</button>
                    </div>
                `;
                QS('body').appendChild(PlayMovieModal);

                const PlaymovieCloseBtn = QS('#closePlayMovierModal');
                PlaymovieCloseBtn.addEventListener('click', () => {
                    if(QS('.modal')){
                        QS('body').removeChild(QS('body').lastChild);

                    }
                });
            });
            

            const TrailerBtn = QS('#trailerBtn');
            TrailerBtn.addEventListener('click', () => {
                FetchTrailer(id)
                .then(data => data.results)
                .then(trailer => {
                    //console.log(trailer)
                    if(trailer.length>0){
                        const TrailerModal = AddElement('div');
                        TrailerModal.id = 'TrailerModal';
                        TrailerModal.className = 'modal';
                        QS('body').appendChild(TrailerModal);
                    }
                    for(let i=0;i<trailer.length;i++){
                        
                        if(trailer[i].type == 'Trailer'){
                            //console.log(trailer[i].key)
                            const iframe = AddElement('div');
                            iframe.className = 'trailer-video';
                            iframe.innerHTML = `
                            <h3>${data.title} Official Trailer</h3>
                            <iframe src="https://www.youtube.com/embed/${trailer[i].key}?enablejsapi=1&origin=http://youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <div>
                                <button type="button" id="closeTrailerModal" class="btn primary">Close</button>
                            </div>
                            `;

                            QS('#TrailerModal').appendChild(iframe);

                            const TrailerCloseBtn = QS('#closeTrailerModal');
                            TrailerCloseBtn.addEventListener('click', () => {
                                if(QS('.modal')){
                                    QS('body').removeChild(QS('body').lastChild);

                                }
                            });

                            break;
                        }
                    }
                })
            });

            const CloseBtn = QS('#closeModal');
            CloseBtn.addEventListener('click', () => {
                if(QS('.modal')){
                    QS('body').removeChild(QS('body').lastChild);
                    QS('body').style.overflow = 'auto';
                }
            });

            // Fetch suggestions
            FetchRecommendationMovie(id)
            .then(data => data.results)
            .then(movie => {
                //console.log(movie)
                const SimilarDiv = AddElement('div');
                SimilarDiv.className = 'similar-div';
                SimilarDiv.innerHTML = `
                    <h4>Suggestions</h4>
                    <div id="similar" class="movie-group"></div>
                `;

                if(movie.length > 0){
                    for(let i=0;i<movie.length;i++){
                        //console.log(movie[i].title)
                        if(movie.poster_path!=''){
                            setTimeout(()=>{
                                RenderMovieCover(movie[i].id, Poster+movie[i].poster_path, '#similar');
                            },500)
                        } else {
                            setTimeout(()=>{
                                RenderMovieCover(movie[i].id, fallbackMoviePoster, '#similar');
                            },500)   
                        }
                    }
                } else {
                    setTimeout(()=>{
                        RenderMovieCover(0, fallbackMoviePoster, '#similar');
                    },500)
                }

                QS('.modal').appendChild(SimilarDiv);
            })
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))

    });
    QS(position).appendChild(MoviePoster)
}

// Fetch selected movie
async function FetchSelectedMovie(id){
    const response = await fetch(`${BaseURL}movie/${id}?language=en-US`, Options);
    const data = response.json();
    return data;
}

// Fetch similar movies
async function FetchRecommendationMovie(id){
    const response = await fetch(`${BaseURL}movie/${id}/recommendations?language=en-US&page=1`, Options);
    const data = response.json();
    return data;
}

// Fetch trailer video
async function FetchTrailer(id){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, Options);
    const data = response.json();
    return data;
}