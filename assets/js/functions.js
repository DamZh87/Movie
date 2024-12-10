export function main() {

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