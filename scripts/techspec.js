const engine = document.querySelector(".engine");
const plane = document.querySelector(".plane");
const seatHeat = document.querySelector(".seatHeat");
const gps = document.querySelector(".gps");
const airBag = document.querySelector(".airBag");

const hovers = [engine, plane, seatHeat, gps, airBag];

hovers.forEach((hovers) => {
  hovers.addEventListener("mouseover", function (e) {
    e.target.classList.add("show");
    setTimeout(() => e.target.classList.remove("show"), 15000);
  });
  //    hovers.addEventListener("mouseleave", function(e){
  //        e.target.classList.remove("show");
  //    })
});

function hoverText(e) {
  e.classList.toggle("show");
  // document.addEventListener("click", function(click){
  //     let divs = document.querySelectorAll("section.carSpec div.show");
  //     divs.forEach(showing => showing.classList.remove("show"));

  // });
}
