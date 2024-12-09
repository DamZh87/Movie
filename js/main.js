document.addEventListener('DOMContentLoaded', () => {

  const listEl = document.querySelector('.list');
  function renderMovieCard({
      title = '',
      overview = '',
      release_date = '',
      poster_path = '',
      id ='',
      
  }) 
      {
      const card = document.createElement('div');

      const titleEl = document.createElement('h3');
      titleEl.textContent = title;

      const overviewEl = document.createElement('p');
      overviewEl.textContent = overview;

      const release_date_nameEl = document.createElement('middle');
      release_date_nameEl.textContent = release_date;

      const poster_pathEl = document.createElement('img');
      poster_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${poster_path}`);

      const idEl = document.createElement('p');
      
      card.setAttribute('data-id', id)
  
      
      titleEl.className = 'user__name'
      overviewEl.className ='city_name'
      release_date_nameEl.className ='company_name'
      poster_pathEl.className ='poster'
      idEl.className = 'film_id'
            
        
      card.appendChild(titleEl)
      card.appendChild(overviewEl)
      card.appendChild(release_date_nameEl)
      card.appendChild(poster_pathEl)
      card.appendChild(idEl)
      return card;
    }

 let page = 1;

    main()

  document.querySelector('.btn').addEventListener('click', () => {
    page++
    //console.log(page);
    main()
 })

 function main() {

          document.querySelector('.btn').textContent = page;
            const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false?language=en-US&page=${page}`, options)
            .then(movieList => movieList.json())
            .then(movieList => {
              console.log(movieList);  
              getMovieList(movieList.results);  
            })
            .catch(err => console.error(err));
          
          
            function getMovieList(list) {
              listEl.innerHTML = ''; 
              list.forEach(item => {
                const card = renderMovieCard(item); 
                listEl.appendChild(card);
                card.addEventListener('click', () => {
                  const filmId = card.getAttribute('data-id');
                  location.href='film.html';
                  localStorage.setItem('filmId', filmId) ;
                });
              });
            }

           

  }


  const input = document.querySelector("#find");
  input.addEventListener("input", updateValue);


  function updateValue(e) {
            let find = e.target.value;
            console.log(find);
            

            // document.querySelector('#search').addEventListener('click', () => {  
            // let find = document.querySelector('#find').value;
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
                }
              };
              
                  fetch(`https://api.themoviedb.org/3/search/movie?query=${find}`, options)
                .then(searchList => searchList.json())
                .then(searchList => {
                  console.log(searchList);  
                  getMovieList(searchList.results);  
                })
                .catch(err => console.error(err));
                    
                function getMovieList(list) {
                  listEl.innerHTML = ''; 
                  list.forEach(item => {
                    const card = renderMovieCard(item); 
                    listEl.appendChild(card);
                  });
                }
  }
  
  
  // )



})