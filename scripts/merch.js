const pictures = document.querySelector(".sliderTop");
const carousel = pictures.querySelector(".carousel");
const nextBtn = pictures.querySelector(".btn.next");
const prevBtn = pictures.querySelector(".btn.prev");
const itemWidth = pictures.querySelector(".item").clientWidth;

nextBtn.addEventListener("click", scrollToNextItem);
prevBtn.addEventListener("click", scrollToPrevItem);

function scrollToNextItem() {
  carousel.scrollBy({ left: itemWidth, top: 0, behavior: "smooth" });
}
function scrollToPrevItem() {
  carousel.scrollBy({ left: -itemWidth, top: 0, behavior: "smooth" });
}
