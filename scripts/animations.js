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

const animateHeader = () => {
  const timeLine = gsap.timeline();

  timeLine
    .from('nav', { opacity: 0, duration: 1, y: -100, ease: Power2.easeOut })
    .from('.logo', { opacity: 0, duration: 0.3, y: 50 })
    .from('.hamburger', { opacity: 0, duration: 0.3, y: -50 }, '-=0.3')
    .from('.heroText', { opacity: 0, duration: 0.8, x: -100 })
    .from('.heroHeading', { opacity: 0, duration: 1, y: 100 }, '=-0.7');
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
    duration: 0.6,
    stagger: 0.2,
    rotation: -360,
    y: 100,
    ease: Expo.easeOut,
  });
};

const animateExterior = () => {
  //   const tl = gsap.timeLine();
  const bigScreen = window.outerWidth >= 1440 ? 1.5 : 1;
  gsap.from('.stripe', {
    scrollTrigger: {
      trigger: '.exteriorBtn',
    },
    opacity: 0,
    duration: 2.2,
    x: -400,
    ease: Expo.easeOut,
  });

  gsap.set('.exteriorDesc', { opacity: 0 });
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
};

//Kan göra funktion av de och återanvända
const animateTech = () => {
  gsap.from('.techFStripe', {
    scrollTrigger: {
      trigger: '.techImg',
      start: 'top center',
    },
    opacity: 0,
    duration: 2.5,
    x: 400,
    ease: Expo.easeOut,
  });
  gsap.from('.techSStripe', {
    scrollTrigger: {
      trigger: '.techImg',
      start: 'top center',
    },
    opacity: 0,
    duration: 2.5,
    x: 400,
    ease: Expo.easeOut,
  });
};

const animateHistory = () => {
  gsap.from('.historyImg', {
    scrollTrigger: {
      trigger: '.historyBtn',
    },
    opacity: 0,
    duration: 1.5,
    y: 200,
    ease: Expo.easeOut,
  });
};

animateHeader();
animateDescText();
animateColoringTimeline();
if (window.outerWidth >= 1024) {
  animateExterior();
}

animateTech();
animateHistory();
