function pageTransition() {
  const tl = gsap.timeline();

  tl.to('.loadingScreen', {
    duration: 0.8,
    width: '100%',
    left: '0%',
    ease: 'Expo.easeInOut',
  });

  tl.to('.loadingScreen', {
    duration: 0.6,
    width: '100%',
    left: '100%',
    ease: 'Expo.easeInOut',
    delay: 0.3,
  });
  tl.set('.loadingScreen', { left: '-100%' });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
  0;
}

function closeBurgerIfOpen() {
  const burgerButton = document.querySelector('.hamburger');
  const navlinks = document.querySelector('.navlinks');
  const nav = document.querySelector('nav');
  const ul = document.querySelector('nav ul');
  if (burgerButton.classList.contains('is-active')) {
    burgerButton.classList.remove('is-active');
    navlinks.classList.remove('active');
    nav.classList.remove('active');
    ul.classList.remove('active');
  }
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        closeBurgerIfOpen();
        await delay(1200);
        done();
      },

      async enter(data) {
        scrollToTop();
        animateHeader();
      },

      async once(data) {
        scrollToTop();
      },
    },
  ],
});

// Used for fixing page transitions that doesn't move scroll position.
function scrollToTop() {
  window.scrollTo(0, 0);
}
