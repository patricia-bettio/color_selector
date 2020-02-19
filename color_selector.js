"use strict"

window.addEventListener("DOMContentLoaded", init);

let HTML = {}

function init(){
  HTML.hexElement = document.querySelector(".getColor");
  showHex();
  showRgb();
  //conversion();
  //showHsl();
  
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

    conversion(r,g,b);
    
    }

}

function conversion(r,g,b){
  //console.log({r});

  let h, s, l;

  r /= 255;
  g /= 255;
  b /= 255;

  const min = Math.min(r,g,b);
  const max = Math.max(r,g,b);
  
  if( max === min ) {
    h = 0;
    console.log({h});
  } else
  if (max === r) {
    h = 60 * (0 + (g - b) / (max - min) );
    console.log({h});
  } else
  if (max === g) {
    h = 60 * (2 + (b - r) / (max - min) );
    console.log({h});
  } else
  if (max === b) {
    h = 60 * (4 + (r - g) / (max - min) );
    console.log({h});
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
  
  console.log("hsl(%f,%f%,%f%)", h, s, l);

  document.querySelector(".hslCode").textContent = `HSL: ${parseInt(h)}, ${parseInt(s)}%, ${parseInt(l)}%`;
 
  console.log("hsl(%f,%f%,%f%)", h, s, l);
}


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
  