// find the maximum 


let arr = [2, 5, 6, 7, 8, 10, 44];

let max = arr.reduce((acc, val, index, array) => {
    return val > acc ? val : acc;
}, 0);

console.log(max);


// find the product of an array :


let arr1 = [1, 2, 3, 4];
let product = arr1.reduce((acc, val) => {
    return acc * val;
}, 1);
console.log(product);