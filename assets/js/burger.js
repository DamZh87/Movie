  // burger
const navBurger = document.querySelector('.nav__h');
const closeBurger = document.querySelector('.burger__close');
const openBurger = document.querySelector('.burger__open');

 openBurger.addEventListener('click', ()=>{
     navBurger.setAttribute('data-opened', 'true')
 })


closeBurger.addEventListener('click', ()=>{
    navBurger.setAttribute('data-opened', 'false')
})
