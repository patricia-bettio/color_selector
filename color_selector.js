"use strict"

window.addEventListener("DOMContentLoaded", init);

let HTML = {}
let rgbColor;

function init(){
 
  HTML.hexElement = document.querySelector(".getColor");
  let rgbColors = showRgb();
  
  console.log(rgbColors);
 
  //let hlsColor = conversion(rgbColors);
  //showHsl();
   //showAnalogous();
}




/* function showHex(){
    //console.log(hexElement)
    HTML.hexElement.oninput = function() { 
    let hexValue = document.querySelector('input[type=color]').value;
    //console.log(hexCode)
    console.log(document.querySelector('input[type=color]').value); 
    document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
    }
} */

function showRgb(){
  HTML.hexElement.oninput = function () { 
    let hexValue = document.querySelector('input[type=color]').value;
    console.log(hexValue)
    //console.log(hexValue.length)
    //console.log(hexValue.substring())
    //console.log(hexValue.substring(5,2)) **** Returns the part of the string from start, with the given length.
    //RED
    //console.log(parseInt(hexValue.substr(1, 2),16))
    let r = parseInt(hexValue.substr(1, 2),16);
    //GREEN
    //console.log(parseInt(hexValue.substr(3, 2),16))
    let g = parseInt(hexValue.substr(3, 2),16);
    //BLUE
    //console.log(parseInt(hexValue.substr(5, 2),16))
    let b = parseInt(hexValue.substr(5, 2),16);
    //showing both selectors because I want to display results of both HEX and RGB:
    document.querySelector(".rgbCode").textContent = `RGB: ${r}, ${g}, ${b}`;
    document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;

    document.querySelector(".baseColor").style.backgroundColor = this.value;

    let rgbObject = {
      r: r,
      g: g,
      b: b
    }
    
  
   rgbColor = rgbObject;
    console.log(rgbObject);
   // return rgbObject;
   conversion(rgbObject)
    }
}

function conversion(rgbObject){
  //console.log({r});

    let r=rgbObject.r;
    let g=rgbObject.g;
    let b=rgbObject.b;
 



  let h, s, l;

  r /= 255;
  g /= 255;
  b /= 255;

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
  
  //console.log("hsl(%f,%f%,%f%)", h, s, l);

  document.querySelector(".hslCode").textContent = `HSL: ${parseInt(h)}, ${parseInt(s)}%, ${parseInt(l)}%`;
 
  //console.log("hsl(%f,%f%,%f%)", h, s, l);

let hslCodes = {
  h: `${parseInt(h)}`,
  s: `${parseInt(s)}%`,
  l: `${parseInt(l)}%`,
}

//const hslCode = Object.create(hslCodes);  
console.log(hslCodes)

//return hslCodes;
 
}

/* 
function showAnalogous(hslCodes){
  console.log(hslCodes);
} */

/* function showHsl(){

  HTML.hexElement.oninput = function() { 
  document.querySelector(".hslCode").textContent = `HSL: ${h}, ${s}, ${l}`;
  document.querySelector(".rgbCode").textContent = `RGB: ${r}, ${g}, ${b}`
  document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
   }

  }  */
 

  
/*   HTML.hexElement.oninput = function() { 
    // let hexValue = document.querySelector('input[type=color]').value;
 
   document.querySelector(".hslCode").textContent = `HSL: ${h}, ${s}, ${l}`;
   //document.querySelector(".rgbCode").textContent = `RGB: ${r}, ${g}, ${b}`
   //document.querySelector(".hexCode").textContent = `HEX: ${hexValue}`;
    }
    return "hsl(" + h + "," + s + "%," + l + "%)"; */
  