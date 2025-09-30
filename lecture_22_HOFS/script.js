// /* 4 reduce method () */

// const { use } = require("react");


// let arr = [2, 5, 3, 10, 30];

// function sumOfArr(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//     }
//     console.log(sum);
// }
// sumOfArr(arr);



// let sum = arr.reduce((accumulator, val) => {
//     accumulator += val;
//     return accumulator;
// }, 0);
// console.log("sum =", sum);



// // find the count of even num :

// let count = arr.reduce((accumulator, val, indexedDB, array) => {
//     accumulator += val % 2 == 0;
//     return accumulator;
// }, 0);
// console.log("count =", count);


// // find the frequency of each element :



// // using for loop 

// let fruts = ["apple", "gava", "kiwi", "apple", "gava", "banana"];
// let freq = {};
// for (let fruit of fruts) {
//     freq[fruit] = (freq[fruit] || 0) + 1;
// }
// console.log(freq);


// // using reduce method :

// let frequency = fruts.reduce((acc, fruts) => {
//     acc[fruts] = (acc[fruts] || 0) + 1;
//     return acc;
// }, {});
// console.log(frequency);



// /* 5 : find metho () 
// - returns a value
// -returns the first element that maches the condition :
// */

// let findKiwi = fruts.find((val, index, arr) => val.toLocaleLowerCase() === "kiwi");
// console.log(findKiwi);

// //==============================================================================================================================


/*Q1: given an array object ,containing details of users ,console the name of first user aged above 30 */

let users1 = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 28, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "David", age: 40, active: false }
];

let findName = users1.find(user => user.age >= 30);

if (findName) {
    console.log(findName.name);
}


// Q2: print the name and age of the user :

console.log(`Name: ${findName.name}, Age: ${findName.age}`);

//***************************************************************************************************** */


let users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 28, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "David", age: 40, active: false }
];

//Q3:  function to create an array of the names of above user


function getName(usersArray) {
    return usersArray.map(user => user.name);
}

let allName = getName(users);
console.log(allName);



// Q4 : function to display all the active users from user arr  

function getActiveUser(usersArray) {
    return usersArray.filter(user => user.active);
}
let activeUsers = getActiveUser(users);
console.log(activeUsers);



// Q5 : functon to find the sum of allusers belo 30 


function getSumOfAges(usersArray) {
    return usersArray.reduce((sum, user) => {
        return user.age < 30 ? sum + user.age : sum;
    }, 0);
}

console.log(getSumOfAges(users));

// Q6 : function to get the names of all active users 



/* ==================passing the function as an argument & return a function  */


function calculate(a, b, opperation) {
    return opperation(a, b);
}
function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
let sum34 = calculate(3, 4, add);
console.log({ sum34 });



//===========ERROR HANDALING ===============

/*
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored

*/





















































