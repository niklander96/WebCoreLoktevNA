const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slideToClickedSlide: true,
  slidesPerView: 'auto',
});

function showAll() {
  let more = document.getElementById("items_hidden");
  let btn = document.getElementById("btn");
  let text = document.getElementById("show-all_text")

  if (more.style.display === "none") {
    more.style.display = "flex";
    btn.style.justifyContent = "flex-start";
    btn.style.paddingLeft = "30px";
    btn.style.transform = "scaleY(-1)";
    text.style.transform = "scaleY(-1)";
    text.innerHTML = "Скрыть";
  } else {
    more.style.display = "none";
    btn.style.transform = "none";
    text.style.transform = "none";
    text.innerHTML = "Показать все";
    btn.style.justifyContent = "flex-end";
  }
}
