const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");

h1.textContent = "Hello";
p.textContent = "Created using JavaScript";

div.appendChild(h1);
div.appendChild(p);

document.body.appendChild(div);
