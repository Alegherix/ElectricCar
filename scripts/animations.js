function triggerTextSlide(toAnimate, trigger) {
  gsap.from(toAnimate, {
    scrollTrigger: {
      trigger,
      start: '20px 80%',
    },
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.6,
  });
}

const animateDescText = () => {
  triggerTextSlide('.anim1', '.prodDescHeading');
  triggerTextSlide('.anim2', '.safetyHeading');
};

const animateNav = () => {
  const timeLine = gsap.timeline();
  timeLine
    .from('nav', { opacity: 0, duration: 1, y: -100, ease: Power2.easeOut })
    .from('.logo', { opacity: 0, duration: 0.3, y: 50 })
    .from('.hamburger', { opacity: 0, duration: 0.3, y: -50 }, '-=0.3');
};

const animateHero = () => {
  const timeLine = gsap.timeline();

  timeLine
    .from('.heroText', { opacity: 0, duration: 0.8, x: -100 })
    .from('.heroHeading', { opacity: 0, duration: 1, y: 100 }, '=-0.7')
    .from(
      '.heroSignupContainer',
      { opacity: 0, duration: 0.6, y: -100 },
      '=-0.3'
    );
};

const animateColoringTimeline = () => {
  gsap.from('.descHeader', {
    scrollTrigger: {
      trigger: '.electricColoringImg',
      start: '20px 80%',
    },
    opacity: 0,
    duration: 1,
    x: -100,
  });
  gsap.from('.electricColoringImg', {
    scrollTrigger: {
      trigger: '.electricColoringImg',
      start: '140px 90%',
    },
    opacity: 0,
    duration: 1.2,
    y: -100,
  });
  gsap.from('.anim4', {
    scrollTrigger: {
      trigger: '.colorPickerContainer',
      start: 'bottom 100%',
    },
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    // rotation: -360,
    y: 50,
    ease: Expo.easeOut,
  });
};

const animateExterior = () => {
  //   const tl = gsap.timeLine();
  const bigScreen = window.innerWidth >= 1440 ? 1.5 : 1;
  gsap.from('.stripe', {
    scrollTrigger: {
      trigger: '.exteriorBtn',
    },
    opacity: 0,
    duration: 2.2,
    x: -400,
    ease: Expo.easeOut,
  });

  gsap.to('.exteriorDesc', {
    scrollTrigger: {
      trigger: '.exteriorBtn',
    },
    opacity: 1,
    duration: 1,
    color: 'white',
    y: 120,
    scale: bigScreen,
    delay: 0.3,
    ease: Expo.easeOut,
  });

  gsap.from('.exteriorBtn', {
    scrollTrigger: {
      trigger: '.exteriorBtn',
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: Expo.easeOut,
  });
};

const animateTech = () => {
  gsap.from('.techFStripe', {
    scrollTrigger: {
      trigger: '.techImg',
      start: 'top 60%',
    },
    opacity: 0,
    duration: 2.5,
    x: 400,
    ease: Expo.easeOut,
  });
  gsap.from('.techSStripe', {
    scrollTrigger: {
      trigger: '.techImg',
      start: 'top 60%',
    },
    opacity: 0,
    duration: 2.5,
    x: 400,
    ease: Expo.easeOut,
  });
};

const animateHistory = () => {
  gsap.from('.historyAnim', {
    scrollTrigger: {
      trigger: '.historyImg',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 1.5,

    x: 100,
    ease: Expo.easeOut,
  });
};

const animateMerch = () => {
  gsap.to('.merchStripe', {
    scrollTrigger: {
      trigger: '.merchStripeS',
    },
    width: '95%',
    duration: 1,
  });
  gsap.to('.merchStripeS', {
    scrollTrigger: {
      trigger: '.merchStripeS',
    },
    width: '95%',
    duration: 1,
  });
  gsap.to('.merchStripeR', {
    scrollTrigger: {
      trigger: '.merchStripeS',
    },
    height: 'calc(70% - 20px)',
    delay: 1,
    duration: 1,
  });
  gsap.to('.merchStripeL', {
    scrollTrigger: {
      trigger: '.merchStripeS',
    },
    height: 'calc(70% - 20px)',
    delay: 1,
    duration: 1,
  });
  gsap.from('.merchImg', {
    scrollTrigger: {
      trigger: '.merchStripeS',
    },
    opacity: 0,
    delay: 1.8,
    duration: 1,
  });
  gsap.from('.merchBtn', {
    scrollTrigger: {
      trigger: '.merchStripeS',
    },
    x: 100,
    opacity: 0,
    delay: 2.5,
    duration: 0.7,
  });
};

const animateInterior = () => {
  gsap.from('.interiorAnim', {
    scrollTrigger: {
      trigger: '.interiorImg',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1.5,
    y: 200,
    stagger: 0.8,
    ease: Expo.easeOut,
  });
};

const mainAnimation = () => {
  animateNav();
  if (document.title === 'Electric') {
    animateHero();
    animateDescText();
    animateColoringTimeline();
    if (window.outerWidth >= 1024) {
      animateExterior();
    }

    animateTech();
    animateHistory();

    animateMerch();
    animateInterior();
  }
};

mainAnimation();
