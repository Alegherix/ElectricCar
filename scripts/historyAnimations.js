function animateHistory(){
    const tl = gsap.timeline();
    tl.from(".historyAnim", {
        opacity: 0,
        x: -100,
        duration:1.2,
        stagger: .4
    })
}

// animateHistory();