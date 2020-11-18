const addBurgerListener = () => {
  const burgerButton = document.querySelector('.hamburger');
  burgerButton.addEventListener('click', () => {
    console.log('Clicked Buurger');
    burgerButton.classList.toggle('is-active');
  });
};

// Sätt upp form clearing
// Samt ett text element som indikerar att formen har submittats
const validateForm = (event) => {
  event.preventDefault();

  return false;
};

// Changes what type of car img is showing
function changeImage(img) {
  const carImg = document.querySelector('.electricColoringImg');
  const colorRegex = new RegExp('(red)|(blue)|(black)');
  // console.log(img.src);
  const buttonColor = img.src.match(colorRegex)[0];

  const tl = gsap.timeline();
  tl.to('.electricColoringImg', {
    opacity: 0,
    x: 300,
    duration: 0.8,
    // ease: Power1.easeOut,
    onComplete: () =>
      (carImg.src = carImg.src.replace(colorRegex, buttonColor)),
  })
    .set('.electricColoringImg', { x: -100 })
    .to('.electricColoringImg', {
      opacity: 1,
      x: 0,
      duration: 0.7,
    });
}

const main = () => {
  addBurgerListener();
  feather.replace();
};

main();
