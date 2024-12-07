document.addEventListener('DOMContentLoaded', () => {

  



  const listEl = document.querySelector('.list');
  function renderMovieCard({
      title = '',
      overview = '',
      release_date = '',
      poster_path = '',
      
      
      
  }) 
      {
      const card = document.createElement('div');
      const titleEl = document.createElement('h3');
      const overviewEl = document.createElement('p');
      const release_date_nameEl = document.createElement('middle');
      const poster_pathEl = document.createElement('img');
      
    
  
      card.className = 'user__card'
      titleEl.className = 'user__name'
      overviewEl.className ='city_name'
      release_date_nameEl.className ='company_name'
      poster_pathEl.className ='poster'
      
  
  
      titleEl.textContent = title;
      poster_pathEl.setAttribute('src', `https://image.tmdb.org/t/p/w500/${poster_path}`);
      overviewEl.textContent = overview;
      release_date_nameEl.textContent = release_date;
      
      
      
      
      card.appendChild(titleEl)
      card.appendChild(overviewEl)
      card.appendChild(release_date_nameEl)
      card.appendChild(poster_pathEl)
      
      return card;
        
    }

    




  

let page = 1;



main()

  document.querySelector('.btn').addEventListener('click', () => {

    page++

    console.log(page);
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
  
  
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
     .then(res => {
      console.log(res);  
      getMovieList(res.results);  
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

  document.querySelector('#search').addEventListener('click', () => {

    
    let find = document.querySelector('#find').value;

  console.log(find);
  
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU'
      }
    };
    
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${find}`, options)
      .then(res => res.json())
       .then(res => {
        console.log(res);  
        getMovieList(res.results);  
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
  

  )





});

