document.addEventListener('DOMContentLoaded', () => {
        
        
        const movie_id = JSON.parse(localStorage.getItem("filmId"));

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
          }
        };
        

        fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
          .then(filmById => filmById.json())
          .then(filmById => {
            let mainFilmInfo = filmById
            console.log(mainFilmInfo);
            let genres = JSON.stringify(filmById.genres);
            console.log(genres);
          
            const backdrop_pathEl = document.createElement('img');
            backdrop_pathEl.setAttribute('src',  `https://image.tmdb.org/t/p/w500/${mainFilmInfo.backdrop_path}`);

            const poster_pathEl = document.createElement('img');
            poster_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${mainFilmInfo.poster_path}`);

            const titleEl = document.createElement('p');
            titleEl.textContent = ('Название: '+ mainFilmInfo.title);

            const overviewEl = document.createElement('p');
            overviewEl.textContent = ('Описание: '+ mainFilmInfo.overview);

            const release_dateEl = document.createElement('p');
            release_dateEl.textContent = ('Дата выхода: '+ mainFilmInfo.release_date);

            const vote_averageEl = document.createElement('p');
            vote_averageEl.textContent = ('Оценка: '+ mainFilmInfo.vote_average);

            const genreEl = document.createElement('p');
            genreEl.textContent = genres;
            

            document.body.append(backdrop_pathEl)
            document.body.append(poster_pathEl)
            document.body.append(titleEl)
            document.body.append(overviewEl)
            document.body.append(release_dateEl)
            document.body.append(genreEl)
            document.body.append(vote_averageEl)
        })
          
            .catch(err => console.error(err));

          const actorsEl = document.querySelector('.actors');
          function renderActorsCard({
              name = '',
              character ='',
              profile_path ='',           
          }) 
              {
              const card = document.createElement('div');
                      
              const profile_pathEl = document.createElement('img');
              profile_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${profile_path}`);

              const nameEl = document.createElement('h3');
              nameEl.textContent = name;

              const characterEl = document.createElement('h4');
              characterEl.textContent = character;

              card.className = 'user__card'
              nameEl.className = 'user__name'
              profile_pathEl.className = 'profile'
              characterEl.className = 'p_small'        
          
              card.appendChild(nameEl)
              card.appendChild(characterEl)
              card.appendChild(profile_pathEl)
              return card;
              }
            

          fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, options)
          .then(FilmActors => FilmActors.json())
          .then(FilmActors => {
           getActorList(FilmActors.cast)
          /console.log(FilmActors.cast);
          })
          .catch(err => console.error(err));
       
          function getActorList(list) {
              let slider = document.querySelector("#myRange");
              let output = document.querySelector("#demo");
              output.innerHTML = slider.value; 
                             
              let actorsQuantity = 1; 
              actorsEl.innerHTML = ''; 
              let actorsList = list.slice(0, actorsQuantity);
              actorsList.forEach(item => {
              const card = renderActorsCard(item); 
              actorsEl.appendChild(card);
            });

              slider.oninput = function () {
                  output.innerHTML = this.value;  
                  actorsQuantity = this.value;  
                  actorsEl.innerHTML = ''; 
                  let actorsList = list.slice(0, actorsQuantity);
                  actorsList.forEach(item => {
                  const card = renderActorsCard(item); 
                  actorsEl.appendChild(card);
              });
            };
          }
            

});