// creating an element 
const h3Element = document.createElement("h3");
h3Element.textContent = "Hi ,I'm a H3 element";


const div1 = document.querySelector("div");
div1.appendChild(h3Element);



//====================================\\Events====================================



const para1 = document.querySelector("p");
para1.addEventListener("click", (event) => {
    para1clicked(event);



});

function para1clicked(event) {
    console.log("you click the para", event.type);
}

// mouseover , 
// mouseup , 
// mousedown ,
//  keyup :



  const paraeelement=document.querySelector("papa2")
   para2.addEventListener("mouseover", (event) => {
            para1mouseover(event);
            para2.style.backgroundColor = "yellow";

});
 para2.addEventListener("mouseout", () => {
            para2.style.color = "black"; 
        });
function para1mouseup(event) {
    console.log("Hello, welcome!");
}


document,addEventListener("keydown", (event)=>{
    console.log ("event type"+event.key);
    console.log ( "event type" + event. key)
});




