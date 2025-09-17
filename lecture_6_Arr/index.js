// let arr = [1, 4, 3, 7, 9];
//  arr.pop();
//  console.log(arr);



//sum of subArrays 
// const arr = [1, 2, 3, 4];
// function subarraySum(arr) {
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         let subSum = 0;
//         for (let j = i; j < n; j++) {
//             subSum += arr[j];
//             sum+=subSum;
//         }
//     }
//     return sum;
// }
// console.log("sum of all subarrays of", arr, "is ", subarraySum(arr));



// slice method


// let arr1=[1,2,3,4,5,6];
// arr1=arr1.slice(0, arr1.length-1);
// console.log (arr1);


//splice method 

// let arr =[1,2,3,4,5,6,];
// arr.splice(arr.length-1,1);
// console.log ( arr);


// 
// let newArr=[1,2,3,4,5];
// // newArr.shift();
// // console.log ( newArr);
// newArr.splice(0,1);
// console.log ( newArr);



//unshift method 

// let arr=[10,20,30,40];
// let z=(arr.unshift(1,2,3));
// console.log( arr)
// console.log (z)


//=========================================================================

// let arr =[1,2,3,4,5,6,7,8];

// for ( let i=0; i<arr.length;i++){
//     arr[i]=arr[i+1];
// }
// arr.length = arr.length-1;
// console.log( arr);



// let arr = [1, 2, 3, 4, 5, 6, 7];

// function rotateArr(arr) {
//     let last = arr.pop();
//     arr.unshift(last);
//     return arr;
// }
// console.log(rotateArr(arr));



// const arr1=[12,13,14,15,16];
// function rotateAnticlockwise(arr){
// let first =arr1.shift();
// arr1.push(first);
// return arr;
// }
// console.log ( rotateAnticlockwise (arr1));


// let arr =[1,2,3,4,5];
// function clockwise(arr){
//     let last =arr.pop();
//     arr.unshift(last);
//  return arr;
// }
// console.log ( clockwise(arr));
