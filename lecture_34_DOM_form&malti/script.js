const h1Element = document.querySelector("h1");
const innerdiv = document.querySelector("inner-div");
const outerdiv = document.querySelector("outer-div");



h1Element.addEventListener("click", () => {
});

innerdiv.addEventListener("click", () => {
    console.log("innerDiv clicked");
});

outerdiv.addEventListener("click", () => {
    console.log("outerDiv clicked");
});

document.body.addEventListener("click", () => {
    console.assert.log("body clicked");
});
