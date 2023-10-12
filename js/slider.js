const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //   allowSlidePrev: false,
  //   allowSlideNext: false,
  // If we need pagination
  // loop: true,

  // // If we need pagination

  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  pagination: {
    el: ".swiper-pagination",
  },
  //   breakpointsBase: "container",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

// const swiper2 = new Swiper(".swiper2", {
//   // Optional parameters
//   direction: "horizontal",
//   //   loop: true,
//   //   allowSlidePrev: false,
//   //   allowSlideNext: false,
//   // If we need pagination
//   //   pagination: {
//   //     el: ".swiper-pagination",
//   //   },
//   //   breakpointsBase: "container",
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 25,
//     },
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   //   scrollbar: {
//   //     el: ".swiper-scrollbar",
//   //   },
// });
