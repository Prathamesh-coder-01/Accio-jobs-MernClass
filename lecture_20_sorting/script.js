



/* given an array , place its last element at a position such 
that all smaller element are in  last and all greatre in the right 

input [2,1,7,5,4] 

output [1,2,4,7,5]
*/


function rangeInArr(arr1) {
    let n = arr1.length;
    let pivot = arr1[n - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < n - 1; i++) {
        if (arr1[i] <= pivot) {
            left.push(arr1[i]);  
        } else {
            right.push(arr1[i]);
        }
    }
    return [...left, ...right, pivot];
}

let arr1 = [2, 1, 7, 5, 4];   //op=[2,1,7,5,4];
console.log(rangeInArr(arr1));  




function printNum(arr){
    let n= arr.length;
    let lastele=arr[n-1];
    let ind=0;
    for ( let i=0; i<n; i++){
        if ( arr[i]<=lastele){
            [arr[i],arr[ind]]= [arr[ind],arr[i]];
            ind++;
        }
    }
    return arr;

}


let arr = [2, 1, 7, 5, 4];
console.log(printNum(arr)); 