"use strict"
//can call name to template
let name = "Peter Parker";

//can also call functions to template
function makeUpper(text) {
    return text.toUpperCase();
}

let template = `<h1>${makeUpper("Hello!")}, ${name}</h1> <p style="font-size:20px">This is a simple template in javascript</p>`;

// to insert template into html
document.getElementById("template").innerHTML = template;