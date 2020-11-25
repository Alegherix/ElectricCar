console.log(document.title);
if(document.title === "Electric"){
    const page = document.querySelector("#homeLnk a");
    page.style.cssText = "border-bottom:2px solid white;";
    console.log("Current page is: "+page.textContent);
}
else if(document.title === "Interior"){
    const page = document.querySelector("#interiorLnk a");
    page.style.cssText = "border-bottom:2px solid white;";
    console.log("Current page is: "+page.textContent);

}
else if(document.title === "Exterior"){
    const page = document.querySelector("#exteriorLnk a");
    page.style.cssText = "border-bottom:2px solid white;";
    console.log("Current page is: "+page.textContent);

}
// if(document.title){

//     $("nav li:nth-child(2)").css({'font-weight' : 'bold',
//                                 'border-bottom' : '2px solid'});

// }