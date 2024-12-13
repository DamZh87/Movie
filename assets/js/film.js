
        
        
        const movie_id = JSON.parse(localStorage.getItem("filmId"));

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
          }
        };
        

        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=ru-RU`, options)
          .then(filmById => filmById.json())
          .then(filmById => {
            let mainFilmInfo = filmById
            console.log(mainFilmInfo);

            filmById.genres.forEach(({name}) =>{
            document.querySelector('.hero-genre').textContent += ` ${name}  ` 
            })
            
            document.querySelector('.hero-year').textContent = mainFilmInfo.release_date.slice(0, 4);
            document.querySelector('.hero-name').textContent = mainFilmInfo.title
            document.querySelector('.header').style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.backdrop_path})`;
            
            let storyEl = document.querySelector('.story__line');
            storyEl.textContent = mainFilmInfo.overview + ' ' + storyEl.textContent;





            fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=ru-RU`, options)
            .then(FilmActors => FilmActors.json())
            .then(FilmActors => {
             getActorList(FilmActors.cast.slice(0, 10))
            /console.log(FilmActors.cast);


         
            })
            .catch(err => console.error(err));
         
            function getActorList(list) {
                actorsEl.innerHTML = ''; 
                list.forEach(item => {
                const actorsSlideEl = renderActors(item); 
                actorsEl.appendChild(actorsSlideEl);
              })
            }

const actorsEl = document.querySelector('.swiper-wrapper');
          function renderActors({
              name = '',
              character ='',
              profile_path ='',           
          }) 
              {
              const actorsSlideEl = document.createElement('div');
                
              const profile_pathEl = document.createElement('img');
              profile_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${profile_path}`);
  
              const swiperActorContainerEl = document.createElement('div');
              const swiperActorNameEl = document.createElement('p');
              const swiperHeroNameEl = document.createElement('p');

              swiperActorNameEl.innerText = name
              swiperHeroNameEl.innerText = character
          


              actorsSlideEl.className = 'swiper-slide'  
              swiperActorContainerEl.className = 'swiper__actor-container'
              swiperActorNameEl.className = 'swiper__actor-name'
              swiperHeroNameEl.className = 'swiper__hero-name'


              actorsSlideEl.appendChild(profile_pathEl)
              actorsSlideEl.appendChild(swiperActorContainerEl)
              swiperActorContainerEl.appendChild(swiperActorNameEl)
              swiperActorContainerEl.appendChild(swiperHeroNameEl)
              return actorsSlideEl;
              }
            




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

            // var swiper = new Swiper(".swiperSimilar", {
            //   slidesPerView: 5,
            //   spaceBetween: 30,
            //   navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            //     clickable: true,
            //   },
            // });
  
  
  
   
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
    
    
        
})
