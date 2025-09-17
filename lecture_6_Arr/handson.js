//  HW
// q1 insersion in arr

//q2 Rotation in array; 


// let arr=[10,20,30,40,50];
// arr1=arr.splice(0,4,50);
// console.log (arr);
// console.log ( arr1)

//let arr=[10,20,30,40];
// for( let i=0; i<arr.length;i++){
//     arr1[i]=arr[i+1];
// }
// arr.length=arr.length-1;
// console.log ( arr)




// let arr=[10,20,30,40];
// arr.unshift (50 );
// console.log ( arr);

// arr1=[10,20,30,40,50]
// arr1.pop();
// arr1.push(50)
// console.log (arr1);

//================================ HOMEWORK ====================================

// Q1 : Rotate array right (clockwise) by 1 element  

let arr=[11,12,13,14,15,16];

function rotateClockwise (arr){
    let a =arr.pop();     //pop() removes 16 from the array.
    arr.unshift (a);     // add  16 in frunt of array
    return arr;            //return the array  

}

console.log (rotateClockwise(arr));


//   Q2 : Rotate array left (anti - clockwise) by 1 element */ 

let arr1=[10,20,30,40,50];

function rotateAnticlockwise(arr){
    let b=arr1.shift();     // shift () method deleat from the start and return to b
    arr1.push(b);           // push () method addthe element at the end and returns array 
    return arr; 
}
console.log (rotateAnticlockwise(arr1) );



//================================================================================


//Q2:Write a function to Rotate array right (clockwise) by k element:

let arr3=[1,2,3,4,5,6];
let k=3;
function clockwise(arr3 , k){
    let n =arr3.length;
    return arr3.slice(n-k).concat(arr3.slice(0,n-k));
}
console.log ( clockwise(arr3,k))
