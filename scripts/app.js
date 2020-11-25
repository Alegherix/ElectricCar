const addBurgerListener = () => {
  const burgerButton = document.querySelector('.hamburger');
  const navlinks = document.querySelector('.navlinks');
  const nav = document.querySelector('nav');
  const ul = document.querySelector('nav ul');
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active');
    navlinks.classList.toggle('active');
    nav.classList.toggle('active');
    ul.classList.toggle('active');
  });
};

function closeBurger() {
  const burgerButton = document.querySelector('.hamburger');
  const navigation = document.querySelector('.navlinks');
  burgerButton.classList.remove('is-active');
  navigation.style.display = 'none';
}

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
};

main();
