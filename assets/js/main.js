import {getWeather, getCurrency, footer} from './footer.js';
import {options} from './movieAPI.js';

//RandomFilm
let randomFilmId = Math.floor(Math.random() * 1000);
let randomFilm1Id = Math.floor(Math.random() * 1000);
let randomFilm2Id = Math.floor(Math.random() * 1000);
let randomFilm3Id = Math.floor(Math.random() * 1000);

fetch(`https://api.themoviedb.org/3/movie/${randomFilmId}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes) => randomFilmRes.json()).then((randomFilmRes) => {
   let randomFilm = randomFilmRes;
   randomFilm.genres.forEach(({
       name
   }) => {
       document.querySelector(".random__genre").textContent += ` ${name}  `;
   });
   document.querySelector(".random__block").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${randomFilm.backdrop_path})`;
   document.querySelector(".random__hero-name").textContent = randomFilm.title;
   document.querySelector(".random__descript").textContent = randomFilm.overview;
   document.querySelector(".random__year").textContent = randomFilm.release_date.slice(0, 4);
   document.querySelector(".random__year").textContent = randomFilm.release_date.slice(0, 4);
   document.querySelector(".random__movie-rating").textContent = randomFilm.vote_average.toString().slice(0, 3);
   document.querySelector(".random__hero-name").setAttribute("data-rand-id", randomFilm.id);
   document.querySelector(".random__hero-name").addEventListener("click", () => {
       const filmId = document.querySelector(".random__hero-name").getAttribute("data-rand-id");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   document.querySelector(".random_film_trailer_btn").addEventListener("click", () => {
       fetch(` https://api.themoviedb.org/3/movie/${randomFilmId}/videos?language=ru-RU`, options) // Трейлер
       .then((trailerID) => trailerID.json()).then((trailerID) => {
           let trailer = trailerID.results[0].key;
           document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/${trailer}`);
       }).catch((err) => console.error(err));
   });
});
fetch(`https://api.themoviedb.org/3/movie/${randomFilm1Id}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes1) => randomFilmRes1.json()).then((randomFilmRes1) => {
   let randomFilm1 = randomFilmRes1;
   randomFilm1.genres.forEach(({
       name
   }) => {
       document.querySelector(".random__genre_1").textContent += ` ${name}  `;
   });
   document.querySelector(".random_img_1").setAttribute('src', `https://image.tmdb.org/t/p/w500/${randomFilm1.poster_path}`);
   document.querySelector(".random__movie-name_1").textContent = randomFilm1.title;
   document.querySelector(".random__rating_1").textContent = randomFilm1.vote_average.toString().slice(0, 3);
   document.querySelector(".random__movie-name_1").setAttribute("data-rand-id", randomFilm1.id);
   document.querySelector(".random__movie-name_1").addEventListener("click", () => {
       const filmId = document.querySelector(".random__movie-name_1").getAttribute("data-rand-id");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   document.querySelector(".swiper-slide_1").addEventListener("click", () => {
       const filmId = document.querySelector(".random__movie-name_1").getAttribute("data-rand-id");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   fetch(`https://api.themoviedb.org/3/movie/${randomFilm2Id}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes2) => randomFilmRes2.json()).then((randomFilmRes2) => {
       let randomFilm2 = randomFilmRes2;
       randomFilm2.genres.forEach(({
           name
       }) => {
           document.querySelector(".random__genre_2").textContent += ` ${name}  `;
       });
       document.querySelector(".random_img_2").setAttribute('src', `https://image.tmdb.org/t/p/w500/${randomFilm2.poster_path}`);
       document.querySelector(".random__movie-name_2").textContent = randomFilm2.title;
       document.querySelector(".random__rating_2").textContent = randomFilm2.vote_average.toString().slice(0, 3);
       document.querySelector(".random__movie-name_2").setAttribute("data-rand-id", randomFilm2.id);
       document.querySelector(".random__movie-name_2").addEventListener("click", () => {
           const filmId = document.querySelector(".random__movie-name_2").getAttribute("data-rand-id");
           location.href = "film.html";
           localStorage.setItem("filmId", filmId);
       });
   });
   document.querySelector(".swiper-slide_2").addEventListener("click", () => {
       const filmId = document.querySelector(".random__movie-name_2").getAttribute("data-rand-id");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   fetch(`https://api.themoviedb.org/3/movie/${randomFilm3Id}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes3) => randomFilmRes3.json()).then((randomFilmRes3) => {
       let randomFilm3 = randomFilmRes3;
       randomFilm3.genres.forEach(({
           name
       }) => {
           document.querySelector(".random__genre_3").textContent += ` ${name}  `;
       });
       document.querySelector(".random_img_3").setAttribute('src', `https://image.tmdb.org/t/p/w500/${randomFilm3.poster_path}`);
       document.querySelector(".random__movie-name_3").textContent = randomFilm3.title;
       document.querySelector(".random__rating_3").textContent = randomFilm3.vote_average.toString().slice(0, 3);
       document.querySelector(".random__movie-name_3").setAttribute("data-rand-id", randomFilm3.id);
       document.querySelector(".random__movie-name_3").addEventListener("click", () => {
           const filmId = document.querySelector(".random__movie-name_3").getAttribute("data-rand-id");
           location.href = "film.html";
           localStorage.setItem("filmId", filmId);
       });
       document.querySelector(".swiper-slide_3").addEventListener("click", () => {
           const filmId = document.querySelector(".random__movie-name_3").getAttribute("data-rand-id");
           location.href = "film.html";
           localStorage.setItem("filmId", filmId);
       });
   })
});
//   ЗАПРОС СПИСКА ПОПУЛЯРНЫХ ФИЛЬМОВ ДЛЯ ХЭДЕРА
fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false&language=ru-RU&page=1`, options).then((movieList) => movieList.json()).then((movieList) => {
   getMovieList(movieList.results);
}).catch((err) => console.error(err));
// ПОЛУЧЕНИЕСПИСКА ПОПУЛЯРНЫХ ФИЛЬМОВ ДЛЯ ХЭДЕРА
function getMovieList(list) {
   swiperHeaderEl.innerHTML = "";
   let headerQunatity = list.slice(0, 5);
   headerQunatity.forEach((item) => {
       const swiperSlide = renderMovieswiperSlide(item);
       swiperHeaderEl.appendChild(swiperSlide);
   });
}
// РЕНДЕР ХЭДЕРА
const swiperHeaderEl = document.querySelector(".swiper-two");

function renderMovieswiperSlide({
   backdrop_path = "",
   title = "",
   release_date = "",
   overview = "",
   id = "",
}) {
   const swiperSlide = document.createElement("swiper-slide");
   const slideEl = document.createElement("div");
   const headerHeroEl = document.createElement("div");
   const headerHeroNameEl = document.createElement("div");
   const movieNameEl = document.createElement("p");
   const headerHeroGenreEl = document.createElement("div");
   const movieYearEl = document.createElement("p");
   const movieGenreEl = document.createElement("p");
   const headerHeroDescrEl = document.createElement("div");
   const movieDescriptEl = document.createElement("p");
   const buttonsContainerEl = document.createElement("div");
   const headerHeroButtonsEl = document.createElement("div");
   const headerHeroButtonsContinueEl = document.createElement("a");
   const headerHeroButtonsWatchswiperHeaderEl = document.createElement("a");
   slideEl.className = "header_swiper";
   headerHeroEl.className = "header__hero";
   headerHeroNameEl.className = "header__hero-name";
   movieNameEl.className = "movie_name";
   headerHeroGenreEl.className = "header__hero-genre";
   movieYearEl.className = "movie_year";
   movieGenreEl.className = "movie_genre";
   headerHeroDescrEl.className = "header__hero-descr";
   movieDescriptEl.className = "movie_descript";
   buttonsContainerEl.className = "buttons-container";
   headerHeroButtonsEl.className = "header__hero-buttons";
   headerHeroButtonsContinueEl.className = "header__hero-buttons-continue";
   headerHeroButtonsWatchswiperHeaderEl.className = "header__hero-buttons-watchlist";
   slideEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
   movieNameEl.textContent = title;
   movieYearEl.textContent = release_date.slice(0, 4);
   movieGenreEl.textContent = "Жанр";
   headerHeroButtonsContinueEl.textContent = "Трейлер";
   headerHeroButtonsContinueEl.setAttribute("data-hystmodal", "#swiper_movie");
   // headerHeroButtonsWatchswiperHeaderEl.textContent = 'Add Watchlist'
   movieDescriptEl.textContent = overview;
   movieNameEl.setAttribute("data-id", id);
   swiperSlide.appendChild(headerHeroEl);
   headerHeroEl.appendChild(headerHeroNameEl);
   headerHeroEl.appendChild(headerHeroGenreEl);
   headerHeroGenreEl.appendChild(movieYearEl);
   headerHeroGenreEl.appendChild(movieGenreEl);
   headerHeroEl.appendChild(headerHeroDescrEl);
   headerHeroDescrEl.appendChild(movieDescriptEl);
   headerHeroNameEl.appendChild(movieNameEl);
   headerHeroEl.appendChild(buttonsContainerEl);
   buttonsContainerEl.appendChild(headerHeroButtonsEl);
   headerHeroButtonsEl.appendChild(headerHeroButtonsContinueEl);
   // headerHeroButtonsEl.appendChild(headerHeroButtonsWatchswiperHeaderEl)
   swiperSlide.appendChild(slideEl);
   movieNameEl.addEventListener("click", () => {
       const filmId1 = movieNameEl.getAttribute("data-id");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId1);
   });
   // ПОЛУЧЕНИЕСПИСКА ТРЕЙЛЕРА ПО id ФИЛЬМА И ВЫВОД
   headerHeroButtonsContinueEl.addEventListener("click", () => {
       const movie_id = movieNameEl.getAttribute("data-id");
       fetch(` https://api.themoviedb.org/3/movie/${movie_id}/videos?language=ru-RU`, options) // Трейлер
       .then((trailerID) => trailerID.json()).then((trailerID) => {
           let trailer = trailerID.results[0].key;
           document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/${trailer}`);
       }).catch((err) => console.error(err));
   });
   return swiperSlide;
}
//   ЗАПРОС СПИСКА НЕДАВНИХ ФИЛЬМОВ ДЛЯ СЛАЙДЕРА "Недавно вышедшие"
fetch(` https://api.themoviedb.org/3/trending/movie/week?language=ru-RU`, options).then((JustRealeasedList) => JustRealeasedList.json()).then((JustRealeasedList) => {
   getJustRealeased(JustRealeasedList.results);
}).catch((err) => console.error(err));
// ПОЛУЧЕНИЕ СПИСКА  НЕДАВНИХ ФИЛЬМОВ ДЛЯ СЛАЙДЕРА "Недавно вышедшие"
function getJustRealeased(list) {
   swipeJustReleasedEl.innerHTML = "";
   list.forEach((item) => {
       const swiperSlideJustReleasedEl = renderJustRealeased(item);
       swipeJustReleasedEl.appendChild(swiperSlideJustReleasedEl);
   });
}
// РЕНДЕР СПИСКА  НЕДАВНИХ ФИЛЬМОВ ДЛЯ СЛАЙДЕРА "Недавно вышедшие"
const swipeJustReleasedEl = document.querySelector(".swiper-JR");

function renderJustRealeased({
   poster_path = "",
   title = "",
   vote_average = "",
   id = "",
}) {
   const swiperSlideJustReleasedEl = document.createElement("swiper-slide");
   const swiperMovieNameEl = document.createElement("p");
   const swiperRatingGenreEl = document.createElement("div");
   const swiperMovieRatingEl = document.createElement("p");
   const swiperNovieGenre = document.createElement("p");
   const img_JREl = document.createElement("img");
   swiperSlideJustReleasedEl.className = "slide_JR";
   swiperMovieNameEl.className = "swiper_movie-name";
   swiperRatingGenreEl.className = "swiper_rating-genre";
   swiperMovieRatingEl.className = "swiper_movie-rating";
   swiperNovieGenre.className = "swiper_movie-genre";
   img_JREl.className = "img_JR";
   swiperMovieNameEl.innerText = title;
   swiperMovieRatingEl.innerText = vote_average.toString().slice(0, 3);
   swiperNovieGenre.innerText = "Пока нет";
   img_JREl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
   swiperMovieNameEl.setAttribute("data-id", id);
   swipeJustReleasedEl.appendChild(swiperSlideJustReleasedEl);
   swiperSlideJustReleasedEl.appendChild(swiperMovieNameEl);
   swiperSlideJustReleasedEl.appendChild(swiperRatingGenreEl);
   swiperRatingGenreEl.appendChild(swiperMovieRatingEl);
   swiperRatingGenreEl.appendChild(swiperNovieGenre);
   swiperSlideJustReleasedEl.appendChild(img_JREl);
   swiperMovieNameEl.addEventListener("click", () => {
       const filmId = swiperMovieNameEl.getAttribute("data-id");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   return swiperSlideJustReleasedEl;
}
//ЛУЧШИЕ ФИЛЬМЫ
let pageTop = 1;
const topListEl = document.querySelector(".week__block");

function renderTopCard({
   title = "",
   release_date = "",
   poster_path = "",
   id = "",
   vote_average = "",
   top = 1,
}) {
   const cardTop = document.createElement("div");
   const placeTopEl = document.createElement("p");
   const posterPathTopEl = document.createElement("img");
   const infoTopEl = document.createElement("div");
   const titleTopEl = document.createElement("p");
   const ratingTop = document.createElement("p");
   const yearTopEl = document.createElement("p");
   posterPathTopEl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
   placeTopEl.textContent = " Топ  " + top;
   yearTopEl.textContent = "Год выхода: " + release_date.slice(0, 4);
   titleTopEl.textContent = title;
   ratingTop.textContent = "Рейтинг: " + vote_average.toString().slice(0, 3);
   titleTopEl.setAttribute("data-id-top", id);
   cardTop.className = "week__card";
   placeTopEl.className = "week__top";
   posterPathTopEl.className = "week__poster";
   infoTopEl.className = "week__info";
   yearTopEl.className = "week__top";
   ratingTop.className = "week__movie-rating";
   titleTopEl.className = "week__movie-name";
   cardTop.appendChild(posterPathTopEl);
   cardTop.appendChild(infoTopEl);
   infoTopEl.appendChild(placeTopEl);
   infoTopEl.appendChild(yearTopEl);
   infoTopEl.appendChild(titleTopEl);
   infoTopEl.appendChild(ratingTop);
   titleTopEl.addEventListener("click", () => {
       const filmId = titleTopEl.getAttribute("data-id-top");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   posterPathTopEl.addEventListener("click", () => {
       const filmId = titleTopEl.getAttribute("data-id-top");
       location.href = "film.html";
       localStorage.setItem("filmId", filmId);
   });
   return cardTop;
}
fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${pageTop}`, options).then((topList) => topList.json()).then((topList) => {
   getTopList(topList.results);
}).catch((err) => console.error(err));

function getTopList(list) {
   let slider = document.querySelector("#myRange");
   let output = document.querySelector("#quantity");
   output.innerHTML = slider.value;
   let filmQuantity = 3;
   topListEl.innerHTML = "";
   let topList = list.slice(0, filmQuantity);
   topList.forEach((item, index) => {
       const cardTop = renderTopCard({...item,
           top: index + 1,
       });
       topListEl.appendChild(cardTop);
   });
   slider.oninput = function() {
       output.innerHTML = this.value;
       filmQuantity = this.value;
       topListEl.innerHTML = "";
       let topList = list.slice(0, filmQuantity);
       topList.forEach((item, index) => {
           const cardTop = renderTopCard({...item,
               top: index + 1,
           });
           topListEl.appendChild(cardTop);
       });
   };
}
// SEARCH FORM
const searchBtn = document.querySelector(".search__btn");
const searchForm = document.querySelector(".search-container-hide");
const searchClose = document.querySelector(".search-button-close");
if (searchBtn && searchForm && searchClose) {
   searchBtn.addEventListener("click", () => {
       searchForm.classList.remove("search-container-hide");
       searchForm.classList.add("search-container-show");
   });
   searchClose.addEventListener("click", () => {
       searchForm.classList.remove("search-container-show");
       searchForm.classList.add("search-container-hide");
   });
} else {}
// SEARCH CODE
const searchEl = document.querySelector("#find_cont");

function renderSearch({
   title = "",
   id = " "
}) {
   const sItem = document.createElement("div");
   const sResultEl = document.createElement("p");
   sResultEl.className = "s_result";
   sResultEl.innerText = title;
   sItem.appendChild(sResultEl);
   sItem.setAttribute("data-id", id);
   return sItem;
}
const input = document.querySelector("#find");
input.addEventListener("input", updateValue);

function updateValue(e) {
   let find = e.target.value;
   fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=ru-RU&query=${find}`, options).then((searchList) => searchList.json()).then((searchList) => {
      sMovieList(searchList.results.slice(0, 5));
       console.log(searchList.results);
   }).catch((err) => console.error(err));

   function sMovieList(search) {
       searchEl.innerHTML = "";
       search.forEach((item) => {
           const sItem = renderSearch(item);
           searchEl.appendChild(sItem);
           sItem.addEventListener("click", () => {
               const filmId = sItem.getAttribute("data-id");
               location.href = "film.html";
               localStorage.setItem("filmId", filmId);
           });
       });
   }
}
const swiperMain = document.querySelector("swiper-container");
const params = {
   injectStyles: [`  .swiper-pagination-bullet {
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
};
Object.assign(swiperMain, params);
swiperMain.initialize();
//МОДАЛЬНОЕ ОКНО
const myModal = new HystModal({
   linkAttributeName: "data-hystmodal",
   catchFocus: true,
   waitTransitions: true,
   closeOnEsc: false,
   beforeOpen: function(modal) {},
   afterClose: function(modal) {
       document.querySelector(".trailer").setAttribute("src", "");
   },
});
// RANDOM SWIPER
var swiper = new Swiper(".randomSwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
   },
   navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
});
// footer
footer()
   // ПОГОДА ))
getWeather()
   //КУРС ВАЛЮТ))
getCurrency()