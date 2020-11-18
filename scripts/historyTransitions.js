function pageTransition(){
    const tl = gsap.timeline();

    tl.to(".loadingScreen", {
        duration: .8,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });

    tl.to(".loadingScreen", {
        duration: .6,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });
    tl.set(".loadingScreen", {left: "-100%"})
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });  0
}

function contentAnimation(){

}

barba.init({
    sync: true,

    transitions: [{
        async leave(data){
            const done = this.async();

            pageTransition();
            await delay(1200);
            done();
        },

        async enter(data){
            // animateHeader()
            // animateHistory();
            // scrollToTop();
        },

        async once(data){
            // animateHeader()
            // scrollToTop();
        }
    }]
})

// Used for fixing page transitions that doesn't move scroll position.
function scrollToTop(){
    window.scrollTo(0,0);
}