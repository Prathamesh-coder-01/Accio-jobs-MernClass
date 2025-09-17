// /*
// function to calculate the lowerbond of the given target element and print the index :
// */

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

// console.log("the target is " + target + " lowerBond is " + lowerbond(arr1, target))

// /*
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
// let arr = [1, 2, 3, 4, 5, 6, 7];
// target = 4;
// console.log("the target is " + target + " upperbond is " + Upperbond(arr, target));




// //===============================================================
// let mySet = new Set([1, 2, 3, 3, 1])
// mySet.add(4);
// mySet.add(5);
// mySet.add(6);
// console.log(mySet);
// console.log(mySet.has(3));
// console.log(mySet.delete(2, 2))
// console.log(mySet)

// set = new Set([["Rhul", "sahil"]]);
// set.add("name1","prathamesh");
// set.add("name2","harsh");
// console.log(set);


// // deleat element 
// set.delete("sahil");
// console.log(set);





// function sumOfArray(arr) {

//     let sum=0;
//     for ( let i=0; i<arr.length; i++){
//         sum=sum+arr[i];

//     }
//     return sum;

// }
// let arr2=[4,5,6,7,8];
// console.log (" the sum of arr is ",sumOfArray(arr2));


// let map = new Map()
// map.set(["name1", "sultan", "age", 21, "city", "pune"]);
// map.set("name2", "Prathamesh");

// console.log(map);
// console.log(map.get("name2"));



const map1 = new Map([
    ["name1", "sultan"],
    [ "age", 21,]
    ["city", "pune"]
]);

    console.log(map1);
