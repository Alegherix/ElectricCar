function triggerTextSlide (toAnimate, trigger) {
    gsap.from(toAnimate, {
        scrollTrigger:{
            trigger,
            start: "20px 80%",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.6,
    })
}

const timeLine = gsap.timeline();


timeLine.from("nav", {opacity: 0, duration: 1, y: -100, ease: Power2.easeOut})
.from(".logo", {opacity:0, duration: 0.3, y: 50})
.from(".hamburger", {opacity:0, duration: 0.3, y: -50}, "-=0.3")
.from(".heroText", {opacity: 0, duration: 0.8, x:-100})
.from(".heroHeading", {opacity: 0, duration: 1, y:100}, "=-0.7")


const animate = () => {
    triggerTextSlide(".anim1", ".prodDescHeading");
    triggerTextSlide(".anim2", ".safetyInfoContainer");
}

const animateColoringTimeline = () => {
    gsap.from(".descHeader", {scrollTrigger: {
        trigger: ".electricColoringImg",
        start: "20px 80%",
    }, opacity:0, duration: 1, x: -100});
    gsap.from(".electricColoringImg", {
        scrollTrigger: {
        trigger: ".electricColoringImg",
        start: "20px 65%",
    }, opacity:0, duration: 1.2, y: -100});
}

animate();
animateColoringTimeline();