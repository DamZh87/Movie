const movie_id = JSON.parse(localStorage.getItem("filmId"));
const actor_id = JSON.parse(localStorage.getItem("actorId"));

const options = {
   method: "GET",
   headers: {
      accept: "application/json",
      Authorization:
         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU",
   },
};

fetch(`https://api.themoviedb.org/3/person/${actor_id}?language=ru-RU`, options)
   .then((actor) => actor.json())
   .then((actor) => {
      console.log(actor);

      document.querySelector(".biography").textContent = actor.biography;

      document.querySelector(".actor-name").textContent = actor.name;

      document
         .querySelector(".actor_img")
         .setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
         );
   })
   .catch((actor) => console.error(err));
