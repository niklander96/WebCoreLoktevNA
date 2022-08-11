let slider = document.querySelector('.swiper');

let display = document.documentElement.clientWidth;
  if (display <= '768') {

    const swiper = new Swiper('.swiper', {

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slideToClickedSlide: true,
      slidesPerView: 'auto',

    });
  }
  else {
    slider.classList.remove('swiper');
  }

let more = document.querySelectorAll('.slider__list_item_hidden');
let btn = document.querySelector('.show-all__button');
btn.addEventListener("click", function () {
  for (let i = 0; i < more.length; i++) {
    let item = more[i];
    if (item.style.display === "none") {
      item.style.display = "flex";
      btn.classList.add('open__all');
      btn.textContent = "Скрыть";
    } else {
      item.style.display = "none";
      btn.textContent = "Показать все";
      btn.classList.remove('open__all');
    }
  }

});






