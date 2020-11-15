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
    const colorRegex = new RegExp("(red)|(yellow)|(green)")
    const buttonColor = img.src.match(colorRegex)[0];
    carImg.src = carImg.src.replace(colorRegex, buttonColor)
}

const main = () => {
    addBurgerListener();
    feather.replace();  
}

main();