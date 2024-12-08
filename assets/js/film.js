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

           
            const genreEl = document.createElement('p');
          let genre = info.genres;
          genre.forEach((element) =>

            console.log(element.name));
            
            //genreEl.textContent = (element.name));
            
            

            document.body.append(backdrop_pathEl)
            document.body.append(poster_pathEl)
            document.body.append(titleEl)
            document.body.append(overviewEl)
            document.body.append(release_dateEl)
            document.body.append(genreEl)


        })
          .catch(err => console.error(err));
        
        
     
      
     

       
       

});