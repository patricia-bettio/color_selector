"use strict"

window.addEventListener("DOMContentLoaded", init);

let HTML = {}

function init(){
    //conversion();
    showHex();
    //HTML.hex = document.querySelector(".hexCode");
}

function conversion(){

r /= 255;
g /= 255;
b /= 255;

let h, s, l;

const min = Math.min(r,g,b);
const max = Math.max(r,g,b);

if( max === min ) {
  h = 0;
} else
if (max === r) {
  h = 60 * (0 + (g - b) / (max - min) );
} else
if (max === g) {
  h = 60 * (2 + (b - r) / (max - min) );
} else
if (max === b) {
  h = 60 * (4 + (r - g) / (max - min) );
}

if (h < 0) {h = h + 360; }

l = (min + max) / 2;

if (max === 0 || min === 1 ) {
  s = 0;
} else {
  s = (max - l) / ( Math.min(l,1-l));
}
// multiply s and l by 100 to get the value in percent, rather than [0,1]
s *= 100;
l *= 100;

console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

}

function showHex(){

    let hexElement = document.querySelector(".getColor");
    console.log(hexElement)
    hexElement.oninput = function() { 
    //console.log(hexCode)
    console.log(document.querySelector('input[type=color]').value);
    
    let hexValue = document.querySelector('input[type=color]').value;
    document.querySelector(".hexCode").textContent = `HEX code: ${hexValue}`
    }
}

