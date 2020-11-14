console.log("Hello");

gsap.from("nav", {opacity: 0, duration: 1.2, y: -100, ease: Power4.easeOut})
gsap.from(".logo", {opacity:0, duration: 0.3, y: 50, delay: 1})
gsap.from(".hamburger", {opacity:0, duration: 0.3, y: -50, delay: 1})

gsap.from(".heroText", {opacity: 0, duration: 1.2, x:-100, delay: 1.2});
gsap.from(".heroHeading", {opacity: 0, duration: 1.2, delay: 1.2, x:350});