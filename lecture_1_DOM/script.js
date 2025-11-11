// =====================================11============================================
console.log(window.document.body);
console.log(document.body);


// it will give all the html child node
console.log(document.body.childNodes);



console.log(document.body.firstChild)

console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelector(".first-div-Child"));
console.log(document.querySelector("#second-div"));
console.log(document.querySelector("div.first-div"));
console.log(document.querySelector("div#second-div"));

// other specific selectors
//select an element based on class
console.log(document.getElementsByClassName("first-div-child"));
console.log(document.getElementById);
console.log(document.getElementsBy);

const para = document.querySelector("p");

console.log(para);
para.style.color = "blue";
para.style.backgroundColor = "yellow";

//
const imageElement = document.querySelector("img");
//
imageElement.setAttribute("src", "image2.png");

//
const divElement = document.querySelector("div");
// create a new attribute
divElement.setAttribute("data-number", "453");

//deleatig an attribute ,by settint the value to the null;
imageElement.setAttribute("data-number", null);


//accesing and updating element:
console.log(para.innerHTML);//accasing 
para.innerHTML = "<strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet corrupti sed impedit, quis suscipit architect incidunt voluptatum voluptatem</strong>"



const secondPara = document.querySelector("second-para");

console.log(para.textContent);//accsessing



// secondPara.textContent = "this is new text"; // updating


// Hw --> Write the difference between the innerHtml & textContant
// hw --> Write a difference between class listst and class name 



// create an element
const selectionElement = document.querySelector("class1");
const classes = selectionElement.className.split(" ");
classes.splice(2, 1);

selectionElement.className = classes.join("");


//classlist :
const selectionElementcopy = document.querySelector(".class1");
console.assert.log(selectionElement.classList);



// add remove  Toggle containt replace
console.log (element.classList.add("active"));