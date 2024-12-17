const movie_id = JSON.parse(localStorage.getItem("filmId"));

const options = {
   method: "GET",
   headers: {
      accept: "application/json",
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU",
   },
};

fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=ru-RU`, options)
   .then((filmById) => filmById.json())
   .then((filmById) => {
      let mainFilmInfo = filmById;
      console.log(mainFilmInfo);

      filmById.genres.forEach(({ name }) => {
         document.querySelector(".hero-genre").textContent += ` ${name}  `;
      });

      document.querySelector(".hero-year").textContent =
         mainFilmInfo.release_date.slice(0, 4);
      document.querySelector(".hero-name").textContent = mainFilmInfo.title;
      document.querySelector(
         ".header"
      ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.backdrop_path})`;

      let storyEl = document.querySelector(".story__line");
      storyEl.textContent = mainFilmInfo.overview + " " + storyEl.textContent;

      fetch(
         `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=ru-RU`,
         options
      )
         .then((FilmActors) => FilmActors.json())
         .then((FilmActors) => {
            getActorList(FilmActors.cast.slice(0, 10));
            console.log(FilmActors.cast);
         })
         .catch((err) => console.error(err));

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
         profile_pathEl.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${profile_path}`
         );

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

      document
         .querySelector(".header__hero-buttons-continue")
         .addEventListener("click", () => {
            fetch(
               ` https://api.themoviedb.org/3/movie/${movie_id}/videos?language=ru-RU`,
               options
            ) // Трейлер
               .then((trailerID) => trailerID.json())
               .then((trailerID) => {
                  console.log(trailerID.results[0].key);
                  let trailer = trailerID.results[0].key;

                  document
                     .querySelector(".trailer")
                     .setAttribute(
                        "src",
                        `https://www.youtube.com/embed/${trailer}`
                     );

                  console.log(trailer);
               })
               .catch((err) => console.error(err));
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

      fetch(
         `https://api.themoviedb.org/3/movie/${movie_id}/similar?language=ru-RU&page=1`,
         options
      )
         .then((SimilarList) => SimilarList.json())
         .then((SimilarList) => {
            //  console.log(SimilarList);
            getSimilar(SimilarList.results);
         })
         .catch((err) => console.error(err));

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
         const img_JREl = document.createElement("img");

         swiperSlideSimilarEl.className = "slide_JR";
         swiperMovieNameEl.className = "swiper_movie-name";
         swiperRatingGenreEl.className = "swiper_rating-genre";
         swiperMovieRatingEl.className = "swiper_movie-rating";
         swiperNovieGenre.className = "swiper_movie-genre";
         img_JREl.className = "img_JR";

         swiperMovieNameEl.innerText = title;
         swiperMovieRatingEl.innerText = vote_average.toString().slice(0, 3);
         swiperNovieGenre.innerText = "Пока нет";
         img_JREl.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${poster_path}`
         );
         swiperMovieNameEl.setAttribute("data-id", id);

         swipeSimilarEl.appendChild(swiperSlideSimilarEl);
         swiperSlideSimilarEl.appendChild(swiperMovieNameEl);
         swiperSlideSimilarEl.appendChild(swiperRatingGenreEl);
         swiperRatingGenreEl.appendChild(swiperMovieRatingEl);
         swiperRatingGenreEl.appendChild(swiperNovieGenre);
         swiperSlideSimilarEl.appendChild(img_JREl);

         swiperMovieNameEl.addEventListener("click", () => {
            const filmId = swiperMovieNameEl.getAttribute("data-id");
            location.href = "film.html";
            localStorage.setItem("filmId", filmId);
         });

         return swiperSlideSimilarEl;
      }

      const swiperMain = document.querySelector("swiper-container");

      const params = {
         injectStyles: [
            `
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
          `,
         ],
         pagination: {
            clickable: true,
            renderBullet: function (index, className) {
               return '<span class="' + className + '">' + "</span>";
            },
         },
      };

      Object.assign(swiperMain, params);

      swiperMain.initialize();

      const myModal = new HystModal({
         linkAttributeName: "data-hystmodal2",
         catchFocus: true,
         waitTransitions: true,
         closeOnEsc: false,
         beforeOpen: function (modal) {},
         afterClose: function (modal) {
            document.querySelector(".trailer").setAttribute("src", "");
         },
      });
   });

// ПОГОДА ))
fetch(
   "https://api.openweathermap.org/data/2.5/weather?lat=53.28245&lon=69.39692&&APPID=ac459d485ea690678b31c37c02d67868&units=metric&lang=ru"
)
   .then((weather) => weather.json())
   .then((weather) => {
      document.querySelector(".temp").textContent += weather.main.temp + "°";
      document.querySelector(".humidity").textContent +=
         +weather.main.humidity + " %";
      document.querySelector(".description").textContent +=
         weather.weather[0].description;
      document
         .querySelector(".weather_icon")
         .setAttribute(
            "src",
            "http://openweathermap.org/img/w/" +
               weather.weather[0].icon +
               ".png"
         );
      document.querySelector(".wind_speed").textContent +=
         weather.wind.speed + " м/с";
   })
   .catch((err) => console.error(err));

//КУРС ВАЛЮТ))
fetch(
   "https://v6.exchangerate-api.com/v6/5dbb5a87ff1222752698a259/pair/USD/KZT"
)
   .then((currency) => currency.json())
   .then((currency) => {
      let cur = currency.conversion_rate.toString();
      document.querySelector(".currency").textContent +=
         cur.slice(0, 5) + " тенге" + "😮";
   })
   .catch((err) => console.error(err));

// footer
var currentYear = new Date().getFullYear();

document.getElementById("copyright").innerHTML =
   " &copy; " + new Date().getFullYear() + " FrontDead";
