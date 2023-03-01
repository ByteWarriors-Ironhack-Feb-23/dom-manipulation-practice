/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Welcome to our e-commerce site";



// by class
const infoCollection = document.getElementsByClassName("info"); // returns an HTMLCollection (something like an array but not an array)
const infoElementsArray = [...infoCollection]; // convert html collection to an array
infoElementsArray.forEach( element => {
    element.style.color = "blue";
});


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");



// by css selectors....
const first = document.querySelector("header h2"); //first element matching this css selector
const all = document.querySelectorAll("header h2"); //all elements matching this css selector (returns a NodeList -- we can use forEach :) )

all.forEach( subtitle => {
    subtitle.style.color = "purple";
});


//
// context: document vs. element
//


// Example: find in a given context
const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");


// Alternative (with querySelectorAll)
const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p");



/**************/
/* Properties */
/**************/


//Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `
    <div id="nested-div">
    <p>one<p>
    <p>two
        <a href="#">click here for more info</a>
    <p>
    </div>
    `;


//Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us... this is the new text";


//Read/Modify CSS --> elm.style
mainTitle.style.color = "green";
mainTitle.style.backgroundColor = "yellow";
mainTitle.style.border = "2px solid green";

//Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id";


//Read/Modify class --> elm.className
mainTitle.className = "shadow rounded";


//(bonus) elm.classList (provides methods to access class names)

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("important");



/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href");
// console.log(result)

// modify or create: elm.setAttribute(name, value);


linkElm.setAttribute("href", "https://ironhack.com"); //replace (if it exists)
linkElm.setAttribute("target", "_blank"); //add (if it doesnt exist)

// remove:
//elm.removeAttribute(attrName);




/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element:
const myNewImg = document.createElement('img');

// step2: add content (ex. innerText) and/or modify attributes 
myNewImg.setAttribute("src", "./images/pikachu.jpg")


//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(myNewImg);


/**********************************/
/* Remove an element from the DOM */
/**********************************/

//parent.removeChild(myElm)
//note: parentContainer needs to be the direct parent.

const elmToRemove = document.getElementById("nested-div");
parentElm.removeChild(elmToRemove);


//Clear an existing element with innerHTML:
//parentElm.innerHTML = "";






/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events:
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)
- Document (DOMContentLoaded, ...)


Attach events:
elm.addEventListener(typeofevent, code);

*/

const btn1 = document.getElementById("button-1");

btn1.addEventListener("click", () => {
    console.log("user has clicked on our button");

    //append paragraph
    const newP =  document.createElement("p");
    newP.innerText = "this p has been created dynamically";
    parentElm.appendChild(newP);
});


// document.addEventListener("click", (e) => {
//     console.log(e)
//     console.log("user clicked somewhere in the document")
// });




//
//Detect if user presses spacebar
//

document.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        console.log("you pressed Spacebar...")
    } else {
        console.log("you pressed something else.....")
    }
});



/*************************************/
/* Attach event to multiple elements */
/*************************************/

const btnList = document.querySelectorAll('.btn');

btnList.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('a click event was fired in one of our BEAUTIFUL BUTTONs');
  });
});



/**********/ 
/* Inputs */
/**********/ 

const imgElm = document.querySelector("#pikachu img");
const priceElm = document.getElementById("price");

imgElm.addEventListener("click", () => {
    console.log(priceElm.value);
});



/******************/
/* Event Bubbling */
/******************/

/*

when an event is fired, it will also "bubble up" and fire on all it's ancestors.

*/

const box2 = document.getElementById("box-2");

box2.addEventListener("click", () => {
    console.log("a click event fired in BOX 2")
})

document.addEventListener("click", () => {
    console.log("a click event dired in DOCUMENT")
});


/*************************************************/
/* Detect Events on elements created dynamically */
/*************************************************/

const magicBtn = document.getElementById("btn-add");

//functionality to add buttons dynamically
magicBtn.addEventListener("click", () => {
    // step1: create the element:
    const newBtn = document.createElement("button");

    // step2: add content or modify (ex. innerHTML...)
    newBtn.className = "btn";
    newBtn.innerText = "Button 3 (this button has been created dynamically)";

    //step3: append to the dom: `parentElm.appendChild()`
    const box3Elm = document.getElementById("box-3");
    box3Elm.appendChild(newBtn)
});

//functionality to detect events in buttons created dynamically
document.addEventListener("click", (e) => {
    if(e.target.className === "btn"){
        console.log("THAT WAS A BEAUTIFUL BUTTON");
    }
});