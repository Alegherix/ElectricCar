const engine = document.querySelector(".engine");
const plane = document.querySelector(".plane");
const seatHeat = document.querySelector(".seatHeat");
const gps = document.querySelector(".gps");
const airBag = document.querySelector(".airBag");

const hovers = [engine, plane, seatHeat, gps, airBag];

console.log(hovers);

hovers.forEach(hovers => {
    
   hovers.addEventListener("mouseover", function(e){
       console.log(e.target);
       e.target.classList.toggle("show");
   })
   hovers.addEventListener("mouseleave", function(e){
       e.target.classList.remove("show");
   })
});

function hoverText(e){
    console.log(e);
    e.classList.toggle("show");
    // document.addEventListener("click", function(click){
    //     let divs = document.querySelectorAll("section.carSpec div.show");
    //     divs.forEach(showing => showing.classList.remove("show"));
        
    // });
};