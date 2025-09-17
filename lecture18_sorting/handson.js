//BUBBLE SORT :

/*in thegiven array swap the arr in the BUBBLE SORT  */

let arr = [4, 5, 3, 2, 1, 10, 7, 6, 9];
let n = arr.length;

for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
console.log(" sorted arr = " + arr)


/* 
TC- O(N^2) 
SC- 0(1) CONSTANT
*/