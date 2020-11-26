const addCarouselListener = () => {
  const pictures = document.querySelector('.sliderTop');
  const carousel = pictures.querySelector('.carousel');
  const nextBtn = pictures.querySelector('.btn.next');
  const prevBtn = pictures.querySelector('.btn.prev');
  const itemWidth = pictures.querySelector('.item').clientWidth;

  nextBtn.addEventListener('click', () =>
    carousel.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' })
  );

  prevBtn.addEventListener('click', () =>
    carousel.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' })
  );
};
addCarouselListener();
