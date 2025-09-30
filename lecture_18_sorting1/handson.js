//BUBBLE SORT :

/*in the given array swap the arr using the BUBBLE SORT  */

let arr = [7,7,1];
let n = arr.length;

for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        if (arr[j] > arr[j + 1]) {

            //swaping the given arr 
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
console.log(" Bubble sorted arr = " + arr)


/* 
TC- O(N^2) 
SC- 0(1) CONSTANT
*/


let arr1 = [4, 5, 3, 9, 10, 1, 3, 4, 1];
let N = arr1.length;
for (let i = 1; i < N; i++) {
    for (let j = 0; j < N - i; j++) {
        if (arr1[j] > arr1[j + 1]) {
            [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
        }
    }
}

console.log(arr1);



/* 
  ************************** SELECTION SORT *************************************************
  */


























































//  1.
/* 
TC- O(N^2) 
SC- 0(1) CONSTANT
*/


