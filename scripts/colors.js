const red = document.querySelector(".redDiamond");
const black = document.querySelector(".blackDiamond");
const blue = document.querySelector(".blueDiamond");
const car = document.querySelector(".electricColoringImg");

black.addEventListener("click", function(){
    car.classList.add("black");
});