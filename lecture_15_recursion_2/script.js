
// write a recuesive function tofind the sum of first N naturl num
function sumOfNatural(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumOfNatural(n - 1);
}
console.log(sumOfNatural(5));

//=========================================================
//function for 0 :
// f

function sumOfNatural(n) {
    if (n <= 0) return 0;

    return n + sumOfNatural(n - 1);
}
console.log(sumOfNatural(0));

//========================================================

function sum(N) {

    let sum = 0;

    for (let i = 0; i <= N; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(5));




// GCD : ( Gretest common diviser );
// THE LARGEST NUM WHICH IS DIVISIABLE :

//GCD (8 ,32) =8 
// GCD (10,25)=5
// GCD (20,1)=1

// 

function gcdSum(a, b) {

    while (a != 0) {
        let temp = a;
        a = b % a;
        b = temp;
    }
    return b;
}
console.log(gcdSum(15, 25))



// ================== using recursive ===========================

function gcd(a, b) {

    if (a === 0) {
        return b;
    }
    return gcd(b % a, a);

}
console.log(gcd(20, 20));


//========================================================

// array of gcd 

let arr = [27, 12, 25, 18, 24];
let gcdArr = 0;

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

for (let i = 0; i < arr.length; i++) {
    gcdArr = gcd(gcdArr, arr[i]);
}

console.log(gcdArr);



// write a function to print  A raised power B:
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

console.log(power(2, 10))
