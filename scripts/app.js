
const addBurgerListener = () => {
    const burgerButton = document.querySelector(".hamburger");
    burgerButton.addEventListener("click", () => {
        console.log("Clicked Buurger");
        burgerButton.classList.toggle("is-active");
    })
}

addBurgerListener();