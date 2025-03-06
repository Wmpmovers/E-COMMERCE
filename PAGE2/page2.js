// LIST OF PRODCUCT
const btnCart1 = document.getElementById("btnCart1");
const btnCart2 = document.getElementById("btnCart2");
const btnCart3 = document.getElementById("btnCart3");
const btnCart4 = document.getElementById("btnCart4");
const btnCart5 = document.getElementById("btnCart5");
const btnCart6 = document.getElementById("btnCart6");
const btnCart7 = document.getElementById("btnCart7");
const btnCart8 = document.getElementById("btnCart8");
const btnCart9 = document.getElementById("btnCart9");
const btnCart10 = document.getElementById("btnCart10");
const btnCart11 = document.getElementById("btnCart11");
const btnCart12 = document.getElementById("btnCart12");

// LIST OF ALL PRODUCT IN AN ARRAY
const products = [btnCart1, btnCart2, btnCart3, btnCart4, btnCart4, btnCart5, btnCart6, btnCart7, btnCart8, btnCart9, btnCart10, btnCart11, btnCart12];

const nofify = document.querySelector(".notification");
const demo = document.querySelector("#demo");
let newCart2 = document.getElementById("newCart2");
let newCart3 = document.getElementById("newCart3");
let newCart4 = document.getElementById("newCart4");
let newCart5 = document.getElementById("newCart5");
let addeddCard = document.getElementById("addeddCard");
let addeddCardd = document.getElementById("addeddCardd");
let emptyCard = document.getElementById("emptyCard");
let totalCart = document.getElementById("total");
let totalBal = document.getElementById("totalBal");

let addCart = 1;

// let productsFunction = ()=>{
//     let newC = newCart3.innerHTML  = "24,000.00";
//     let newC2 = newCart3.innerHTML  = "22,500.00";
//     if ( newC == newC2){
//         totalCart.innerHTML = "50,000.00";
//     }
// }
products[0].addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart1.style.background = "rgb(100, 100, 243)";
    btnCart1.style.color = "white";
    demo.style.display = "block";
    emptyCard.style.display = "none";
    addeddCard.style.display = "block";
    newCart2.innerHTML = "Harch T-Shirt";
    newCart3.innerHTML = "24,000.00";
    totalCart.style.display = "block";
    totalBal.innerText = "24,000.00";
});

btnCart2.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart2.style.background = "rgb(100, 100, 243)";
    btnCart2.style.color = "white";
    demo.style.display = "block";
    emptyCard.style.display = "none";
    addeddCardd.style.display = "block";
    newCart4.innerHTML = "Mixed Color T-Shirt";
    newCart5.innerHTML = "22,500.00";
});

btnCart3.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart3.style.background = "rgb(100, 100, 243)";
    btnCart3.style.color = "white";
    demo.style.display = "block";
});
btnCart4.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart4.style.background = "rgb(100, 100, 243)";
    btnCart4.style.color = "white";
    demo.style.display = "block";
});
btnCart5.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart5.style.background = "rgb(100, 100, 243)";
    btnCart5.style.color = "white";
    demo.style.display = "block";
});
btnCart6.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart6.style.background = "rgb(100, 100, 243)";
    btnCart6.style.color = "white";
    demo.style.display = "block";
});
btnCart7.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart7.style.background = "rgb(100, 100, 243)";
    btnCart7.style.color = "white";
    demo.style.display = "block";
});
btnCart8.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart8.style.background = "rgb(100, 100, 243)";
    btnCart8.style.color = "white";
    demo.style.display = "block";
});
btnCart9.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart9.style.background = "rgb(100, 100, 243)";
    btnCart9.style.color = "white";
    demo.style.display = "block";
});
btnCart10.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart10.style.background = "rgb(100, 100, 243)";
    btnCart10.style.color = "white";
    demo.style.display = "block";
});
btnCart11.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart11.style.background = "rgb(100, 100, 243)";
    btnCart11.style.color = "white";
    demo.style.display = "block";
});
btnCart12.addEventListener("click", () => {
    nofify.style.display = "block";
    nofify.innerHTML = addCart++;
    btnCart12.style.background = "rgb(100, 100, 243)";
    btnCart12.style.color = "white";
    demo.style.display = "block";
});


const searchIcon = document.querySelector(".searchIcon");
const searchCard = document.querySelector("#searchCard");
const thirdNav = document.querySelector("#thirdnaV");
const closeSvg = document.querySelector("#closeSVG");

searchIcon.addEventListener("click", () =>{
    searchCard.style.display = "block";
    searchIcon.style.display = "none";
    thirdNav.style.display = "none";
});
closeSvg.addEventListener("click", () =>{
    searchCard.style.display = "none";
    searchIcon.style.display = "block";
    thirdNav.style.display = "block";
});






