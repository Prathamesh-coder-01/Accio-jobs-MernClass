//HW  
//  *homework

// given a 2d matrix reverse each odd columns and print it
// input =[
// [1,2,3,4,5,6],
// [2,6,12,43,3,5],
// [8,10,34,23,12,8],
// ];

// //output
// [
// [1,10,3,23,5,8],
// [2,6,12,43,3,5],
// [8,2,34,4,12,6],
// ];

// let matrix = [
//     [1, 2, 3, 4, 5, 6],
//     [2, 6, 12, 43, 3, 5],
//     [8, 10, 34, 23, 12, 8]
// ];
// function reverseOddColumns(matrix) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     for (let j = 0; j < cols; j++) {
//         if ((j + 1) % 2 === 1) {
//             let col = [];
//             for (let i = 0; i < rows; i++) {
//                 col.push(matrix[i][j]);
//             }
//             col.reverse();
//             for (let i = 0; i < rows; i++) {
//                 matrix[i][j] = col[i];
//             }
//         }
//     }
//     return matrix;
// }
// console.log(reverseOddColumns(matrix));



//====================================================================


// 2. write a function to find the sum of all subarrays;
// const marks = [
//   [85, 90, 78],
//   [88, 76, 92],
//   [90, 85, 95],
// ];

// let sum = 0;
// for (let i = 0; i < marks.length; i++) {


// for (let j = 0; j < marks[i].length; j++) {
//   sum = marks[i][j];
// }
// }
// console.log(" sum =", sum )


// //=========================================

// const marks = [
//   [85, 90, 78],
//   [88, 76, 92],
//   [90, 85, 95],
// ];

// let sum = 0;
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     sum += matrix[i][j];
//   }
// }
// console.log("Sum =", sum);



// //===========================================



// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }
