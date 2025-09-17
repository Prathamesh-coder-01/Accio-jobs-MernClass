// function prefixSum(arr) {
//     let result = [];
//     let currentSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         currentSum += arr[i];
//         result.push(currentSum);
//     }
//     return result;
// }



// const arr=[3,5,1,4,5,8]
// let prefix=[];
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//     empty.push(sum)
// }
// console.log(prefix)



//=========================================================================
//minimum Distance or zero index :


// function ArrayProblem6(n, arr) {

//     // Write code here


//     let prevEvenIndex = -1;

//     let minDist = n;

//     for (let i = 0; i < n; i++) {

//         //positive and even number

//         if (arr[i] > 0 && arr[i] % 2 == 0) {

//             //if there exist a previous even element

//             if (prevEvenIndex != -1) {

//                 minDist = Math.min(minDist, i - prevEvenIndex);

//             }

//             prevEvenIndex = i;

//         }

//     }

//     //if there are less than 2 even numbers, 

//     //minDist will never change and still be same as N

//     return minDist == n ? -1 : minDist;

// }

// let arr = [1, 2, 2, 3, 1, 4, 2, 3];
// function frequencyCount(arr) {
//     let freq = {};
//     for (let num of arr) {
//         if (freq[num]) {
//             freq[num]++;
//         } else {
//             freq[num] = 1;
//         }
//     }
//     return freq;
// }
// console.log(frequencyCount(arr));



// let arr1 = [1, 2, 3, 1, 3, 4, 5, 3, 4];
// function countDigit(arr){
//     let freq=[];
//     for ( let i=1; i<arr.length; i++){

// if ( freq [num]){
//     freq[num]++;
// }else {
//     freq [num]=1;
// }
//     }
//     return freq;
// } 
// console.log ( countDigit( arr));



//=================empty arr===================
let arr = new Array(100);
console.log(arr.length); // 100
console.log(arr);        // [ <100 empty items> ]
