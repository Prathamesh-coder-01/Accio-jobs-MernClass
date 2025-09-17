// // sum of array

// let arr = [1, 2, 3, 4, 5, 6];

// let N = arr.length
// let sum = 0;
// for (let i = 0; i < N; i++) {
//     sum += arr[i];
// }
// console.log(sum);

//==============================================================================

// sum of two array

// function sumOfArr(arr1, arr2) {

//     let sum = 0;
//     let arr = arr1.concat(arr2);
//     let N = arr.length;

//     for (let i = 0; i < N; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }
// let arr1 = [7, 8, 9];
// let arr2 = [4, 5, 6];
// console.log(sumOfArr(arr1, arr2))

// //=========================================

// // sum of a 2D array element in array
// function sumOfArr1(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//         }

//     }
//     return sum;

// }
// let arr = [[1, 2, 3],
// [4, 5, 6]
// ];
// console.log(sumOfArr1(arr))




//============================================================

// multiplication of arr


// function multiplicationArr(arr){

//     let product=1 ;

//     for ( let i=0; i< arr.length;i++){
//         product *=arr[i];

//     }
//     return product;
// }
// let arr1= [2,3,4]
//  console.log ( multiplicationArr( arr1))



// // multiplication of 2D Arrays : 

// function multiplicationArr1(arr) {
//     let product = 1;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product;

// }
// let arr = [[1, 2, 3],
// [4, 5, 6]
// ];
// console.log(multiplicationArr1(arr))