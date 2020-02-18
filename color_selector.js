"use strict"

window.addEventListener("DOMContentLoaded", init);

let HTML = {}

function init(){
  HTML.hexElement = document.querySelector(".getColor");
  showHex();
  showRgb();
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
    //console.log(hexElement)
    HTML.hexElement.oninput = function() { 
    let hexValue = document.querySelector('input[type=color]').value;
    //console.log(hexCode)
    console.log(document.querySelector('input[type=color]').value); 
    document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
    }
}

function showRgb(){
 
  HTML.hexElement.oninput = function() { 
    let hexValue = document.querySelector('input[type=color]').value;
    console.log(hexValue)
    //console.log(hexValue.length)
    //console.log(hexValue.substring())
    //console.log(hexValue.substring(5,2)) **** why always ",2"?
    //RED
    //console.log(parseInt(hexValue.substr(1, 2),16))
    const r = parseInt(hexValue.substr(1, 2),16);
    //GREEN
    //console.log(parseInt(hexValue.substr(3, 2),16))
    const g = parseInt(hexValue.substr(3, 2),16);
    //BLUE
    //console.log(parseInt(hexValue.substr(5, 2),16))
    const b = parseInt(hexValue.substr(5, 2),16);
    //showing both selectors because I want to display results of both HEX and RGB:
    document.querySelector(".rgbCode").textContent = `RGB: ${r}, ${g}, ${b}`
    document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
    }
}
