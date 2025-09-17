
// /*  QUESTION 1 
// function to find the square root using the binary search 
// for the perfect square  
// */

// let N = 81;

// function sqrtRoot(N) {
//     let low = 0;
//     let high = N;


//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (mid * mid === N) {

//             return mid;
//         } else if (mid * mid < N) {
//             ans = mid;
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }

//     }
//     return ans;

// }
// console.log("the square root of " + N + " is " + sqrtRoot(N))




// // //=====================================================


// // QUESTION 2:
// //  function to find the index value of a given array  

// function targetElement(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return -1

// }
// let a = [1, 2, 3, 4, 5, 7, 9, 11, 15];
// let target = 11;

// let index = targetElement(a, target);

// if (index !== -1) {
//     console.log("The index value if arr is " + index);

// } else {
//     console.log(" element not found ");
// }




// //====================================================================

// // QUESTION 3:
// // function to find index of target in given arr 



// function findIndexOdArr(arr, target) {


//     let low = 0;
//     let high = arr.length - 1;
//     let index = -1


//     while (low <= high) {

//         let mid = Math.floor(low + (high - low) / 2)

//         if (arr[mid] == target) {
//             index = mid;
//             high = mid - 1;
//         } else if (arr[mid] > target) {
//             high = mid - 1
//         } else {
//             low = mid + 1;
//         }


//     }
//     return index;
// }
// let arr = [1, 2, 6, 6, 6, 11, 11, 12]
// target = 12;

// console.log("the target element is " + target + " index is " + findIndexOdArr(arr, target))



// /* 
//  QUESTION 4:
//  function to give the lowerbond using binary search using arr

//  */
// // lower bond 

// function lowerbond(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let index = arr.length;

//     while (low <= high) {

//         let mid = Math.floor(low + (high - low) / 2)

//         if (arr[mid] >= target) {
//             index = mid;
//             high = mid - 1;

//         } else {
//             low = mid + 1;
//         }

//     }
//     return index;

// }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// target = 4

// console.log("the target is " + target +
//     " lowerBond is " + lowerbond(arr1, target))


// /*

// QUESTION 5:
// function to calculate the Upperbond of the given target element 
// and print the index of arr :
// */

// function Upperbond(arr, target) {

//     let low = 0;
//     let high = arr.length - 1;
//     let index = arr.length;

//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);

//         if (arr[mid] > target) {
//             index = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return index < arr.length ? arr[index] : -1;
// }
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// target = 4;
// console.log("the target is " + target + " upperbond is " + Upperbond(arr2, target));



/*
 METHODS :

 set() = set is a unique data 

 */


// let mySet = new Set([1,2,3,3,1])
// mySet.add(4);
// mySet.add(5);
// mySet.add(6);
// mySet.add(2);
// console.log(mySet);


//let set =new Set ([1,2,3,4,5,6,7,8,8,9]);
// add the element in set 
// set.add (200)   
// set.add (22)   
// set.add (10)   
// set.add (30)   
// console.log (set);

// // set.has method check element is present or not in a set
// let set1 =new Set ([1,2,3,4,5,6,7,8,8,10]);
// set1.has(200);
// set1.has(40);
// set1.has(10);
// console.log (set1)


// // deleat the element from set and return true or false 

// console.log ( set1.delete(100),set1)
// console.log ( set1.delete(10),set1)
// console.log ( set1.delete(2),set1)

//let arr= [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];

// let set1= new Set(arr);
// let arr1=[...set1];
// let arr11= Array.from(set1);

// let set2= new Set([...arr]);
// let arr2=[...set2];

// console.log({arr,arr1,arr11,arr2})


//**************************************************************** */
/*
 map () 

 */
// let map =new Map ()

// map.set("name1","sultan");
// map.set( "name2", ["sunny", "mohan","Rahul"]);
// console.log ( map);

// // map.has check the value is present or not in (true,false )
// console.log (map.has("name1"))
// console.log (map.has("name3"))


// // in map.get we can access thr value of set 
// console.log ( map.get("name1"));
// console.log ( map.get("name2"));

// // 
// console.log ( map.delete( "name1"));

// console.log ( map.delete( "name3"));





