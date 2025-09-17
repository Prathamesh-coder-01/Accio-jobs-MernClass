// let x=10;
// let y=5;
// const  z=12;
// var w=10;
// {
//     var Y1=6;
// console.log (Y1);
// }

//     console.log (Y1);
//  function sayHi(){
//     for ( leti=0; i<=x; i++ );
//     console.log ("hi",i);
//  }
// sayHi();


//=================================================

// let arr = [1, [1, 2, 3], 4, 5, [6, 97, 71], 80];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);

//     }

//     }


//=========================================

// let arr2=[ [2,5],[3,6],[1,4], [6,3]];
// for (let i=0; i<4; i++){
//     for (let j=0; j<2; j++){
//         console.log (arr2[i][j]);
//     }
// }


//=====================================================
// let arr2 = [ 21, [1, 2, 3], 4, 5, [6, 97, 71], 80];
// for ( let i=0; i< arr2.length; i++){
//     console.log (arr2[i]);
// }

//=====================================
  
// METHOD 3 using isArray()

// let arr1 = [1, 2, 3, 4];       
// let arr2 = "Hello";            
// let arr3 = {a: 1, b: 2};       
// let arr4 = [1, [2, 3], 4, 5];  

// console.log(Array.isArray(arr1)); 
// console.log(Array.isArray(arr2)); 
// console.log(Array.isArray(arr3)); 
// console.log(Array.isArray(arr4)); 

//============================================

// function isMatrixOrNot(arr) {
//   if (!Array.isArray(arr))
//    return false;
//   if (!arr.every(Array.isArray)) 
//     return false;
//   let length = arr[0].length;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length !== length) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isMatrixOrNot([[1, 2], [3, 4]])); 
// console.log(isMatrixOrNot([[1, 2, 3], [4, 5, 6]])); 
// console.log(isMatrixOrNot([[1, 2], [3]])); 
// console.log(isMatrixOrNot([1, 2, 3]));


//===================================================
// function productSum(arr) {

//     let product = 1;

//     for (let array of arr) {

//         let sum = 0;

//         for (let i = 0; i < array.length; i++) {

//             sum = sum + array[i];

//         }

//         product = product * sum;

//     }

//     return product;

// }

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(productSum(arr));