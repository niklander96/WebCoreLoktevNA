const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slideToClickedSlide: true,
  slidesPerView: 'auto',
});


let more = document.querySelectorAll('.slider__list_item_hidden');
let btn = document.querySelector('.show-all__button');


btn.addEventListener("click", function (e) {
  for (let i = 0; i < more.length; i++) {
    let item = more[i];
    if (item.style.display === "none") {
      item.style.display = "inline-block";
      btn.style.justifyContent = "flex-start";
      btn.style.paddingLeft = "35px";
      btn.style.backgroundImage = 'url(./img/icon/icon180.svg)'
      btn.textContent = "Скрыть";
    } else {
      item.style.display = "none";
      btn.textContent = "Показать все";
      btn.style.justifyContent = "flex-end";
      btn.style.backgroundImage = 'url(./img/icon/icon.svg)'
    }
  }

})



