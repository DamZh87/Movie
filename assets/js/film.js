import {getWeather, getCurrency, footer} from './footer.js';
import {options} from './movieAPI.js';

const movie_id = JSON.parse(localStorage.getItem("filmId"));

fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=ru-RU`, options).then((filmById) => filmById.json()).then((filmById) => {
   let mainFilmInfo = filmById;
   filmById.genres.forEach(({
       name
   }) => {
       document.querySelector(".hero-genre").textContent += ` ${name}  `;
   });
   document.querySelector(".hero-year").textContent = mainFilmInfo.release_date.slice(0, 4);
   document.querySelector(".hero-name").textContent = mainFilmInfo.title;
   document.querySelector(".header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.backdrop_path})`;
   let storyEl = document.querySelector(".story__line");
   storyEl.textContent = mainFilmInfo.overview + " " + storyEl.textContent;
   fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=ru-RU`, options).then((FilmActors) => FilmActors.json()).then((FilmActors) => {
       getActorList(FilmActors.cast.slice(0, 10));
    }).catch((err) => console.error(err));

   function getActorList(list) {
       actorsEl.innerHTML = "";
       list.forEach((item) => {
           const actorsSlideEl = renderActors(item);
           actorsEl.appendChild(actorsSlideEl);
       });
   }
   const actorsEl = document.querySelector(".swiper-wrapper");

   function renderActors({
       name = "",
       character = "",
       profile_path = "",
       id = "",
   }) {
       const actorsSlideEl = document.createElement("div");
       const profile_pathEl = document.createElement("img");
       profile_pathEl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${profile_path}`);
       const swiperActorContainerEl = document.createElement("div");
       const swiperActorNameEl = document.createElement("p");
       const swiperHeroNameEl = document.createElement("p");
       swiperActorNameEl.innerText = name;
       swiperHeroNameEl.innerText = character;
       actorsSlideEl.className = "swiper-slide";
       swiperActorContainerEl.className = "swiper__actor-container";
       swiperActorNameEl.className = "swiper__actor-name";
       swiperHeroNameEl.className = "swiper__hero-name";
       swiperActorNameEl.setAttribute("data-actor", id);
       actorsSlideEl.appendChild(profile_pathEl);
       actorsSlideEl.appendChild(swiperActorContainerEl);
       swiperActorContainerEl.appendChild(swiperActorNameEl);
       swiperActorContainerEl.appendChild(swiperHeroNameEl);
       swiperActorNameEl.addEventListener("click", () => {
           const actorId = swiperActorNameEl.getAttribute("data-actor");
           location.href = "actor.html";
           localStorage.setItem("actorId", actorId);
       });
       return actorsSlideEl;
   }
   document.querySelector(".header__hero-buttons-continue").addEventListener("click", () => {
       fetch(` https://api.themoviedb.org/3/movie/${movie_id}/videos?language=ru-RU`, options) // Трейлер
       .then((trailerID) => trailerID.json()).then((trailerID) => {
           let trailer = trailerID.results[0].key;
           document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/${trailer}`);
           }).catch((err) => console.error(err));
   });
   // ACTORS SWIPER
   var swiper = new Swiper(".swiperActors", {
       slidesPerView: 6,
       spaceBetween: 30,
       loop: true,
       pagination: {
           el: ".swiper-pagination",
           clickable: true,
       },
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
           clickable: true,
       },
   });
   // SIMILAR SWIPER
   fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?language=ru-RU&page=1`, options).then((SimilarList) => SimilarList.json()).then((SimilarList) => {
       getSimilar(SimilarList.results);
   }).catch((err) => console.error(err));

   function getSimilar(list) {
       swipeSimilarEl.innerHTML = "";
       list.forEach((item) => {
           const swiperSlideSimilarEl = renderSimilar(item);
           swipeSimilarEl.appendChild(swiperSlideSimilarEl);
       });
   }
   const swipeSimilarEl = document.querySelector(".swiperSimilar");

   function renderSimilar({
       poster_path = "",
       title = "",
       vote_average = "",
       id = "",
   }) {
       const swiperSlideSimilarEl = document.createElement("swiper-slide");
       const swiperMovieNameEl = document.createElement("p");
       const swiperRatingGenreEl = document.createElement("div");
       const swiperMovieRatingEl = document.createElement("p");
       const swiperNovieGenre = document.createElement("p");
       const img_SimEl = document.createElement("img");
       swiperSlideSimilarEl.className = "slide_JR";
       swiperMovieNameEl.className = "swiper_movie-name";
       swiperRatingGenreEl.className = "swiper_rating-genre";
       swiperMovieRatingEl.className = "swiper_movie-rating";
       swiperNovieGenre.className = "swiper_movie-genre";
       img_SimEl.className = "img_JR";
       swiperMovieNameEl.innerText = title;
       swiperMovieRatingEl.innerText = vote_average.toString().slice(0, 3);
       swiperNovieGenre.innerText = "Пока нет";

       if (poster_path !== undefined && poster_path !== null && poster_path !== "") {
         
           img_SimEl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
       } else {
          
           img_SimEl.setAttribute("src", '../assets/img/none.jpg');  
       }
       
       swiperMovieNameEl.setAttribute("data-id", id);
       swipeSimilarEl.appendChild(swiperSlideSimilarEl);
       swiperSlideSimilarEl.appendChild(swiperMovieNameEl);
       swiperSlideSimilarEl.appendChild(swiperRatingGenreEl);
       swiperRatingGenreEl.appendChild(swiperMovieRatingEl);
       swiperRatingGenreEl.appendChild(swiperNovieGenre);
       swiperSlideSimilarEl.appendChild(img_SimEl);
       swiperMovieNameEl.addEventListener("click", () => {
           const filmId = swiperMovieNameEl.getAttribute("data-id");
           location.href = "film.html";
           localStorage.setItem("filmId", filmId);
       });
       return swiperSlideSimilarEl;
   }
   const swiperMain = document.querySelector("swiper-container");
   const params = {
       injectStyles: [`
         .swiper-pagination-bullet {
           width: 20px;
           height: 20px;
           text-align: right;
           line-height: 20px;
           font-size: 12px;
           color: #000;
           opacity: 1;
           background: rgba(0, 0, 0, 0.2);
         }
   
         .swiper-pagination-bullet-active {
           color: #fff;
           background: #007aff;
         }
         `, ],
       pagination: {
           clickable: true,
           renderBullet: function(index, className) {
               return '<span class="' + className + '">' + "</span>";
           },
       }, 
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
   };
   Object.assign(swiperMain, params);
   swiperMain.initialize();
   const myModal = new HystModal({
       linkAttributeName: "data-hystmodal2",
       catchFocus: true,
       waitTransitions: true,
       closeOnEsc: false,
       beforeOpen: function(modal) {},
       afterClose: function(modal) {
           document.querySelector(".trailer").setAttribute("src", "");
       },
   });
});
// footer
footer()
   // ПОГОДА ))
getWeather()
   //КУРС ВАЛЮТ))
getCurrency()