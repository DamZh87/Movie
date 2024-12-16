import { swiperHeaderEl } from "../js/main.js";

export    function getMovieList(list) {
  swiperHeaderEl.innerHTML = ''; 
  let headerQunatity = list.slice(0, 5);
  headerQunatity.forEach(item => {
    const swiperSlide = renderMovieswiperSlide(item); 
    swiperHeaderEl.appendChild(swiperSlide);
   });
}
