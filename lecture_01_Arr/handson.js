// arrays 



let iplTeam = ["mi", "csk", "srh", "rcb", "kkr"];

// console.log (iplTeam);
// console.log (iplTeam[2]);
// console.log (iplTeam.push("lsg"));
// console.log (iplTeam.pop());
// console.log ( iplTeam.shift());
// console.log ( iplTeam.unshift("GT","DC"));
console.log(iplTeam);

let iplTeam2 = ["gt", "dc", "lsg"];
let iplTeam3 = ["mi", "csk", "srh", "rcb", "kkr"];

console.log(iplTeam.concat(iplTeam2, iplTeam3));



//** function to find the factorial of num  */


function factiorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);


}
factiorial(5);