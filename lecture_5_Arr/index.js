
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
// console.log(" sum =",sum)


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

// console.log("Row Traversal:");
// for (let i = 0; i < matrix.length; i++) {         // row
//   for (let j = 0; j < matrix[i].length; j++) {    // column
//     console.log(matrix[i][j]);
//   }
// }





//



// let arr = [1, 4, 3, 7, 9];
// arr.pop();
// console.log(arr);



//sum of subArrays 
const arr = [1, 2, 3, 4];
function subarraySum(arr) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let subSum = 0;
        for (let j = i; j < n; j++) {
            subSum += arr[j];
            sum+=subSum;
        }
    }
    return sum;
}
console.log("sum of all subarrays of", arr, "is ", subarraySum(arr));



// slice method





