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

const main = () => {
    addBurgerListener();
    feather.replace();  
}

main();