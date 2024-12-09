document.addEventListener('DOMContentLoaded', () => {


  





const movie_id = 912649;
              
          
          






        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
          }
        };
        
        
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
          .then(res => res.json())
           .then(res => {
            let info = res
            console.log(info);


          

            const backdrop_pathEl = document.createElement('img');
            backdrop_pathEl.setAttribute('src',  `https://image.tmdb.org/t/p/w500/${info.backdrop_path}`);

            const poster_pathEl = document.createElement('img');
            poster_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${info.poster_path}`);

            const titleEl = document.createElement('p');
            titleEl.textContent = ('Название: '+ info.title);

            const overviewEl = document.createElement('p');
            overviewEl.textContent = ('Описание: '+ info.overview);

            const release_dateEl = document.createElement('p');
            release_dateEl.textContent = ('Дата выхода: '+ info.release_date);


            const vote_averageEl = document.createElement('p');
            vote_averageEl.textContent = ('Оценка: '+ info.vote_average);



           
           
            const genreEl = document.createElement('p');

          let genre = JSON.stringify(info.genres);

            
    


  
          console.log(info.genre)
            
            genreEl.textContent = (genre);
            
            

            document.body.append(backdrop_pathEl)
            document.body.append(poster_pathEl)
            document.body.append(titleEl)
            document.body.append(overviewEl)
            document.body.append(release_dateEl)
            document.body.append(genreEl)
            document.body.append(vote_averageEl)


        })
          .catch(err => console.error(err));
        
        

          const testEl = document.querySelector('.test');
          function renderActorsCard({
              name = '',
              character ='',
              profile_path ='',           
          }) 
              {
              const card = document.createElement('div');

              
         
              const profile_pathEl = document.createElement('img');
              
              const nameEl = document.createElement('h3');
              const characterEl = document.createElement('h4');
              card.className = 'user__card'
              nameEl.className = 'user__name'
              profile_pathEl.className = 'profile'

              characterEl.className = 'p_small'        
          
              nameEl.textContent = name;
        
              characterEl.textContent = character;
              profile_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${profile_path}`);

              
              card.appendChild(nameEl)
        
              card.appendChild(characterEl)
              card.appendChild(profile_pathEl)
              return card;
                
            }
            

          fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, options)
          .then(res1 => res1.json())
          .then(res1 => {
           getActorList(res1.cast)
         
           console.log(res1.cast);
           
           
          })
          .catch(err => console.error(err));
       
                 




            function getActorList(list) {
              let slider = document.querySelector("#myRange");
              let output = document.querySelector("#demo");
              output.innerHTML = slider.value; 
               
              
              let col = 7; 
            
              slider.oninput = function () {
                  output.innerHTML = this.value;  
                  col = this.value;  
              
              
              console.log(col); 


              testEl.innerHTML = ''; 
              const tenActors = list.slice(0, col);


              tenActors.forEach(item => {
                const card = renderActorsCard(item); 
                testEl.appendChild(card);
        
              });
            };


            }
            

});