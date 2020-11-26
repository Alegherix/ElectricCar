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

const styleNav = () => {
  if (document.title === 'Electric') {
    const page = document.querySelector('#homeLnk a');
    page.style.cssText = 'border-bottom:2px solid white;';
  } else if (document.title === 'Interior') {
    const page = document.querySelector('#interiorLnk a');
    page.style.cssText = 'border-bottom:2px solid white;';
  } else if (document.title === 'Exterior') {
    const page = document.querySelector('#exteriorLnk a');
    page.style.cssText = 'border-bottom:2px solid white;';
  } else if (document.title === 'History') {
    const page = document.querySelector('#historyLnk a');
    page.style.cssText = 'border-bottom:2px solid white;';
  } else if (document.title === 'Merchandise') {
    const page = document.querySelector('#marchLnk a');
    page.style.cssText = 'border-bottom:2px solid white;';
  } else if (document.title === 'Technical Specification') {
    const page = document.querySelector('#specLnk a');
    page.style.cssText = 'border-bottom:2px solid white;';
  }
};

const validateForm = (event) => {
  event.preventDefault();
  // Reset Form
  const form = document.querySelector('form');
  const input = document.querySelector('input');

  input.value = '';
  const signedUp = document.createElement('p');
  signedUp.classList.add('signedUp');
  signedUp.textContent = "You've been signed up for the mailing list";

  form.appendChild(signedUp);
  setTimeout(() => {
    document.querySelector('.signedUp').remove();
  }, 5000);
  return false;
};
// Changes what type of car img is showing
function changeImage(img) {
  const carImg = document.querySelector('.electricColoringImg');
  const colorRegex = new RegExp('(red)|(blue)|(black)');
  const buttonColor = img.src.match(colorRegex)[0];

  const tl = gsap.timeline();
  tl.to('.electricColoringImg', {
    opacity: 0,
    x: 300,
    duration: 0.8,
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
  styleNav();
};

main();
