const timeLine = gsap.timeline();

timeLine.from("nav", {opacity: 0, duration: 1, y: -100, ease: Power2.easeOut})
.from(".logo", {opacity:0, duration: 0.3, y: 50})
.from(".hamburger", {opacity:0, duration: 0.3, y: -50}, "-=0.3")
.from(".heroText", {opacity: 0, duration: 1.2, x:-100})
.from(".heroHeading", {opacity: 0, duration: 1.2, y:100}, "=-0.7")


gsap.from(".anim1", {
    scrollTrigger: ".prodInfoText",
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.6
})

gsap.from(".anim2", {
    scrollTrigger: ".safetyInfoText",
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.6
})