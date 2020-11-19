const addBurgerListener = () => {
  const burgerButton = document.querySelector('.hamburger');
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active');
    const navigation = document.querySelector('.navlinks');
    const ulElement = navigation.querySelector('ul');
    const header = document.querySelector('header');

    if (burgerButton.classList.contains('is-active')) {
      navigation.style.display = 'flex';
      navigation.style.backgroundColor = 'var(--houseColor)';
      navigation.style.position = 'fixed';
      navigation.style.top = 0;
      navigation.style.left = 0;
      navigation.style.height = '100vh';
      navigation.style.width = '100vw';
      ulElement.style.flexDirection = 'column';
      ulElement.style.justifyContent = 'center';
      ulElement.style.gap = '1rem';

      header.style.width = '100%';
      header.style.position = 'fixed';
      header.style.zIndex = 5;
    } else {
      navigation.style.display = 'none';
    }
  });
};

function enableBurger() {}

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
