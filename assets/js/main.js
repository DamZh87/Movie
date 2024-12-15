


        
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
  }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false&language=ru-RU&page=1`, options)
  .then(movieList => movieList.json())
  .then(movieList => {
    //console.log(movieList);  
    getMovieList(movieList.results);  
  })
  .catch(err => console.error(err));
  
   function getMovieList(list) {
    swiperHeaderEl.innerHTML = ''; 
    let headerQunatity = list.slice(0, 5);
    headerQunatity.forEach(item => {
      const swiperSlide = renderMovieswiperSlide(item); 
      swiperHeaderEl.appendChild(swiperSlide);
     });
  }
  
  
          fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false&language=ru-RU&page=2`, options)
          .then(JustRealeasedList => JustRealeasedList.json())
          .then(JustRealeasedList => {
          //  console.log(JustRealeasedList);  
            getJustRealeased(JustRealeasedList.results);  
          })
          .catch(err => console.error(err));
  
          function getJustRealeased(list) {
            swipeJustReleasedEl.innerHTML = ''; 
                  list.forEach(item => {
              const swiperSlideJustReleasedEl = renderJustRealeased(item); 
              swipeJustReleasedEl.appendChild(swiperSlideJustReleasedEl);
            
            });
          }


          
  
    const swiperHeaderEl = document.querySelector('.swiper-two');
    function renderMovieswiperSlide({
      backdrop_path = '',
      title = ''  ,
      release_date ='' ,
      overview ='',
      id = '',
    }) 
        {
        const swiperSlide = document.createElement('swiper-slide');
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
        const headerHeroButtonsWatchswiperHeaderEl = document.createElement('a');
  
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
              headerHeroButtonsWatchswiperHeaderEl.className = 'header__hero-buttons-watchlist'  
             
                    slideEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
                    movieNameEl.textContent = title
                    movieYearEl.textContent = release_date
                    movieGenreEl.textContent = 'Жанр'
                    headerHeroButtonsContinueEl.textContent = 'Трейлер'
                    headerHeroButtonsContinueEl.setAttribute('data-hystmodal',"#swiper_movie")
                    headerHeroButtonsWatchswiperHeaderEl.textContent = 'Add Watchlist'
                    movieDescriptEl.textContent = overview
                    movieNameEl.setAttribute('data-id', id)
  
                            swiperSlide.appendChild(headerHeroEl)
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
                            headerHeroButtonsEl.appendChild(headerHeroButtonsWatchswiperHeaderEl)
                            swiperSlide.appendChild(slideEl)
     
                            
                            movieNameEl.addEventListener('click', () => {
                              const filmId1 = movieNameEl.getAttribute('data-id');
                              location.href='film.html';
                              localStorage.setItem('filmId', filmId1) ;
                            });
        return swiperSlide;
      }
  
  
  
      const swipeJustReleasedEl = document.querySelector('.swiper-JR');
      function renderJustRealeased({
        poster_path = '',
        title = ''  ,
        vote_average ='' ,
        id = '',
      }) 
          {
          const swiperSlideJustReleasedEl = document.createElement('swiper-slide');
          const swiperMovieNameEl = document.createElement('p');
          const swiperRatingGenreEl = document.createElement('div');
          const swiperMovieRatingEl = document.createElement('p');
          const swiperNovieGenre = document.createElement('p');
          const img_JREl = document.createElement ('img')
         
               swiperSlideJustReleasedEl.className = 'slide_JR'
               swiperMovieNameEl.className = 'swiper_movie-name'
               swiperRatingGenreEl.className = 'swiper_rating-genre'
               swiperMovieRatingEl.className = 'swiper_movie-rating'
               swiperNovieGenre.className = 'swiper_movie-genre'
               img_JREl.className = 'img_JR'
  
                  swiperMovieNameEl.innerText = title
                  swiperMovieRatingEl.innerText = vote_average.toString().slice(0 , 3);
                  swiperNovieGenre.innerText = 'Пока нет'
                  img_JREl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${poster_path}`);
                  swiperMovieNameEl.setAttribute('data-id', id)
    
                  swipeJustReleasedEl.appendChild(swiperSlideJustReleasedEl)
                  swiperSlideJustReleasedEl.appendChild(swiperMovieNameEl)
                  swiperSlideJustReleasedEl.appendChild(swiperRatingGenreEl)
                  swiperRatingGenreEl.appendChild(swiperMovieRatingEl) 
                  swiperRatingGenreEl.appendChild(swiperNovieGenre) 
                  swiperSlideJustReleasedEl.appendChild(img_JREl)
       
  
                  swiperMovieNameEl.addEventListener('click', () => {
                    const filmId = swiperMovieNameEl.getAttribute('data-id');
                    location.href='film.html';
                    localStorage.setItem('filmId', filmId) ;
                  });
  
          return swiperSlideJustReleasedEl;
        }

              // SEARCH FORM
        const searchBtn = document.querySelector('.search__btn');
        const searchForm = document.querySelector('.search-container-hide');
        const searchClose = document.querySelector('.search-button-close');
        
        
        if (searchBtn && searchForm && searchClose) {
          searchBtn.addEventListener('click', () => {
            searchForm.classList.remove('search-container-hide');
            searchForm.classList.add('search-container-show');
          });
        
          searchClose.addEventListener('click', () => {
            searchForm.classList.remove('search-container-show');
            searchForm.classList.add('search-container-hide');
          });
        } else {
          
        }
  
  
  
        // SEARCH CODE


        const searchEl = document.querySelector('#find_cont');
        function renderSearch({
               title = ''  ,
              id = ' ' ,
        }) 
            {
              const sItem = document.createElement('div')
             const sResultEl = document.createElement('p');
           
           
             sResultEl.className = 's_result'
              sResultEl.innerText = title
                    
              sItem.appendChild(sResultEl)
         
              sItem.setAttribute('data-id', id) 
                    
            return sItem;
            
          }
    
        const input = document.querySelector("#find");
        input.addEventListener("input", updateValue);
        function updateValue(e) {
                  let find = e.target.value;
                  console.log(find);
                  

                  const options = {
                      method: 'GET',
                      headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
                      }
                    };
                    
                        fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=ru-RU&query=${find}`, options)
                      .then(searchList => searchList.json())
                      .then(searchList => {
                        console.log(searchList);  
                        sMovieList(searchList.results.slice(0, 5)); 
                        console.log(searchList.results);   
                      })
                      .catch(err => console.error(err));
                          
                      function sMovieList(search) {
                        searchEl.innerHTML = ''; 
                        search.forEach(item => {
                          const sItem = renderSearch(item); 
                          searchEl.appendChild(sItem);
                          sItem.addEventListener('click', () => {
                            const filmId = sItem.getAttribute('data-id');
                            location.href='film.html';
                            localStorage.setItem('filmId', filmId) ;
                          });
                        });
  
                        
                      }
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
      linkAttributeName: "data-hystmodal",
      catchFocus: true,
      waitTransitions: true,
      closeOnEsc: false,
      beforeOpen: function (modal) {
       },
      afterClose: function (modal) {
      },
    });
    
  
  
  