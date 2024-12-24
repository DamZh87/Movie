// SEARCH FORM
const searchBtn = document.querySelector(".search__btn");
const searchForm = document.querySelector(".search-container-hide");
const searchClose = document.querySelector(".search-button-close");
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchForm && searchClose) {
   searchBtn.addEventListener("click", () => {
    document.querySelector('.search-input').focus();
       searchForm.classList.remove("search-container-hide");
       searchForm.classList.add("search-container-show");
       searchInput.focus();
   });
   searchClose.addEventListener("click", () => {
  
       searchForm.classList.remove("search-container-show");
       searchForm.classList.add("search-container-hide");
   });
} else {}
