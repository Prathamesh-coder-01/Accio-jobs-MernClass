// // Sorting day 2 : -> Mearge , Merge sort ,

// // merge : given two sorted array ,A & B merge both of them


// function mergesortedArrays(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
//     let i = 0; j = 0;
//     let ans = [];

//     while (i < n && j < m) {
//         if (arr1[i] < arr2[j]) {
//             ans.push(arr1[i]);
//             i++;
//         } else {
//             ans.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < n) {
//         ans.push(arr1[i]);
//         i++;
//     }

//     while (j < m) {
//         ans.push(arr2[j]);
//         j++;
//     }

//     return ans;
// }
// let arr1 = [1, 3, 4, 7, 10];
// let arr2 = [2, 9, 12, 14, 20];
// console.log(mergesortedArrays(arr1, arr2));

// //============================================================

// function mergesort(arr, low, high) {
//     //base case

//     if (low == high) {
//         return [arr[low]];
//     }

//     //recersive call

//     let mid = Math.floor((low + high) / 2);
//     let leftsortedarr = mergesort(arr, low, mid);
//     let rightsortedArr = mergesort(arr, mid + 1, high);

//     // mearsing of returned arr

//     let mergeArr = mergesortedArrays(leftsortedarr, rightsortedArr);
//     return mergeArr;
// }

// let arr = [3, 7, 1, 5, 8, 2, 4]
// console.log(mergesort(arr, 0, arr.length - 1));

// /*
// TC O( N * log N)
// SP O(N) */


// //=====================================================
// // Insersion sorting :

// // input =[1,2,7,9,6];
// // output =[1,2,6,7,9];

// let arr3 = [1, 2, 7, 9, 6];

// let n = arr3.length;

// for (let i = 0; i < n; i++) {
//     for (j = 0; j < n - i - 1; j++) {
//         if (arr3[j] > arr3[j + 1]) {

//             [arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]];


//         }

//     }
// }
// console.log(" the sorted arr is =", arr3);


// let arr =[1,2,3,4,7,9,6,];
// for (let i=0; i<arr.length; i++){
//     for( let j=0; j<arr.length; j++){
//         if (arr[i]<arr[j]){
//             [arr[j],arr[i]]=[arr[i],arr[j]];

//         }
//     }
//     console.log (arr);
// }



