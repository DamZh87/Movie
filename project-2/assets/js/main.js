// const swiper = new Swiper(".swiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 5500,
//     disableOnInteraction: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


const swiperMain = document.querySelector("swiper-container");

const params = {
  injectStyles: [
    `
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        text-align: right;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: #007aff;
      }
      `,
  ],
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
};

Object.assign(swiperMain, params);

swiperMain.initialize();

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: false,
  beforeOpen: function (modal) {
    console.log("Message before opening the modal");
    console.log(modal); //modal window object
  },
  afterClose: function (modal) {
    console.log("Message after modal has closed");
    console.log(modal); //modal window object
  },
});
