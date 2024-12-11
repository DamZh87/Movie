

let page = 1;

        
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
}
};

fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=${page}`, options)
.then(movieList => movieList.json())
.then(movieList => {
  console.log(movieList);  
  getMovieList(movieList.results);  
})
.catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(resGenres => resGenres.json())
  .then(resGenres => console.log(resGenres))
  .catch(err => console.error(err))

 function getMovieList(list) {
  listEl.innerHTML = ''; 
  let headerQunatity = list.slice(0, 5);
  headerQunatity.forEach(item => {
    const card = renderMovieCard(item); 
    listEl.appendChild(card);
    card.addEventListener('click', () => {
      const filmId = card.getAttribute('data-id');
      location.href='film.html';
      localStorage.setItem('filmId', filmId) ;
    });
  });
}








  const listEl = document.querySelector('.swiper-two');
  function renderMovieCard({
    backdrop_path = '',
    title = ''  ,
    release_date ='' ,
    overview ='',
    id = '',
  }) 
      {
      const card = document.createElement('swiper-slide');
      const slideEl = document.createElement('div');
      const headerHeroEl = document.createElement('div');
      const headerHeroNameEl = document.createElement('div');
      const movieNameEl = document.createElement('p');
      const headerHeroGenreEl = document.createElement ('div')
      const movieYearEl = document.createElement ('p')  
      const movieGenreEl = document.createElement ('p')  
      const headerHeroDescrEl = document.createElement('div');
      const movieDescriptEl = document.createElement('p');
      const buttonsContainerEl = document.createElement('div');
      const headerHeroButtonsEl = document.createElement('div');
      const headerHeroButtonsContinueEl = document.createElement('a');
      const headerHeroButtonsWatchlistEl = document.createElement('a');

            slideEl.className ='header_swiper'
            headerHeroEl.className = 'header__hero'
            headerHeroNameEl.className = 'header__hero-name'
            movieNameEl.className = 'movie_name'
            headerHeroGenreEl.className = 'header__hero-genre'
            movieYearEl.className = 'movie_year'
            movieGenreEl.className = 'movie_genre'
            headerHeroDescrEl.className = 'header__hero-descr'
            movieDescriptEl.className = 'movie_descript'
            buttonsContainerEl.className = 'buttons-container'
            headerHeroButtonsEl.className = 'header__hero-buttons'
            headerHeroButtonsContinueEl.className = 'header__hero-buttons-continue'
            headerHeroButtonsWatchlistEl.className = 'header__hero-buttons-watchlist'  
           
                  slideEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
                  movieNameEl.textContent = title
                  movieYearEl.textContent = release_date
                  movieGenreEl.textContent = 'Жанр'
                  headerHeroButtonsContinueEl.textContent = 'Watch Trailer'
                  headerHeroButtonsContinueEl.setAttribute('data-hystmodal',"#swiper_movie")
                  headerHeroButtonsWatchlistEl.textContent = 'Add Watchlist'
                  movieDescriptEl.textContent = overview
                  card.setAttribute('data-id', id)

                          card.appendChild(headerHeroEl)
                          headerHeroEl.appendChild(headerHeroNameEl)
                          headerHeroEl.appendChild(headerHeroGenreEl)
                          headerHeroGenreEl.appendChild(movieYearEl)
                          headerHeroGenreEl.appendChild(movieGenreEl)
                          headerHeroEl.appendChild(headerHeroDescrEl)
                          headerHeroDescrEl.appendChild(movieDescriptEl)
                          headerHeroNameEl.appendChild(movieNameEl)
                          headerHeroEl.appendChild(buttonsContainerEl) 
                          buttonsContainerEl.appendChild(headerHeroButtonsEl)
                          headerHeroButtonsEl.appendChild(headerHeroButtonsContinueEl)
                          headerHeroButtonsEl.appendChild(headerHeroButtonsWatchlistEl)
                          card.appendChild(slideEl)
   
      return card;
    }



           // ACTORS SWIPER
           

var swiper = new Swiper(".swiperActors", {
  slidesPerView: 7,
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
          // ACTORS SWIPER
 
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
    linkAttributeName: "data-hystmodal",
    catchFocus: true,
    waitTransitions: true,
    closeOnEsc: false,
    beforeOpen: function (modal) {
      console.log("Message before opening the modal");
      console.log(modal); //modal window object
    },
    afterClose: function (modal) {
      console.log("Message after modal has closed");
      console.log(modal); //modal window object
    },
  });
  


