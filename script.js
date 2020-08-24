var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random_button"); 

// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient(){
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function randomValue(){

    // console.log( Math.random()*16777215 );
    // console.log( Math.floor(Math.random()*16777215) );
    // console.log( Math.floor(Math.random()*16777215).toString(16) );

    var value1 = Math.floor(Math.random()*16777215).toString(16) ;
    var value2 = Math.floor(Math.random()*16777215).toString(16) ;
    value2 = (value2.toString() + "0".repeat(6 - value2.length));
    value1 = (value1.toString() + "0".repeat(6 - value1.length));

    color1.value = "#" + value1;
    color2.value = "#" + value2;
    css.textContent = body.style.background + ";";

    setGradient();

}

setGradient();

color1.addEventListener("input" , setGradient );

color2.addEventListener("input" , setGradient );

randomButton.addEventListener("click" , randomValue );

// for (var i = 0; i < 1000000; i++) {
//     randomValue();
//   } 

const rotina = (oi) => {
    const ola = oi;
    console.log("rotina");

    const epa = () => {
        console.log("epa");
        return ola;
    }

    return epa;
}

const oloco = rotina("oi");
const eita = rotina("noo");

eita();
oloco(); 