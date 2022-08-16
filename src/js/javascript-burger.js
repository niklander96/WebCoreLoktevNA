// Бургер меню
let burgerButton = document.querySelector('.upper-menu__button_burger');
let burgerClose = document.querySelector('.burger-menu__button_burgerX');

const pageBody = document.querySelector('.land');


burgerButton.addEventListener("click", function (event) {
  event.preventDefault();
  burgerMenu.classList.add('burger-menu-show');
  land.classList.add('land_blur');

  burgerClose.addEventListener("click", function (event) {
    event.preventDefault();
    burgerMenu.classList.remove('burger-menu-show');
    land.classList.remove('land_blur');
  })
})
// const menuBody = document.querySelector('.burger-menu')
//
// document.addEventListener("click", menu);
//
//     function menu(event) {
//
//   event.preventDefault();
//       if (event.target.closest('.burger-menu__button_burger')) {
//         menuBody.classList.add('burger-menu-show');
//         land.classList.add('land_blur');
//       }
//       if (!event.target.closest('.burger-menu') && event.target.closest('.burger-menu__button_burgerX')) {
//         menuBody.classList.remove('burger-menu-show');
//         land.classList.remove('land_blur');
//       }
//       console.log("dwdqdw")
//     }
