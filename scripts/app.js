const addBurgerListener = () => {
    const burgerButton = document.querySelector(".hamburger");
    burgerButton.addEventListener("click", () => {
        console.log("Clicked Buurger");
        burgerButton.classList.toggle("is-active");
    })
}

// Sätt upp form clearing
// Samt ett text element som indikerar att formen har submittats
const validateForm = (event) => {
    event.preventDefault();

    return false;
}

// Changes what type of car img is showing
function changeImage(img) {
    const carImg = document.querySelector(".electricColoringImg");
    const colorRegex = new RegExp("(red)|(blue)|(black)")
    // console.log(img.src);
    const buttonColor = img.src.match(colorRegex)[0];


    const tl = gsap.timeline();
    tl.to(".electricColoringImg", {
        opacity: 0,
        x: 300,
        duration: 0.5,
        onComplete: () =>  carImg.src = carImg.src.replace(colorRegex, buttonColor) 
    })
    .to(".electricColoringImg", {x:-100, duration: 0.1})
    .to(".electricColoringImg", {
        opacity: 1,
        x: 0,
        duration: 0.5,
    },)
}

const main = () => {
    addBurgerListener();
    feather.replace();  
}

main();