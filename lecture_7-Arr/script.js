
let arr=[-1,-2,-3,-4,5];

function maxSubarraySum(arr) {
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    
  }
  return sum;
}


console.log(maxSubarraySum(arr));

//******************************************************** */

//sum of all sub array


// let arr=[1,2,3,4,5];
// for ( let i=0; i<arr.length; i++){
//   let sum = 0;
//   for ( let j=i; j<arr.length; j++){
//     sum+=arr[j];
//     console.log (sum);
//   }
// }



/* 
print the sum of sub array :
*/
// function printSubArrSum(arr){
//     let n=arr.length;
//     for ( let i=0; i<n; i++){
//         let subarraySum=0;
//         for ( let j=i; j<n; j++){
//             subarraySum+=arr[j];
//             console.log (" sum of subarr ",i, "to",j, "is", subarraySum);
//         }
//     }
// }
// const arr=[1,2,3,4];
// printSubArrSum(arr);




//*********************************************************************
// Function to calculate the maximum sum among all sumarr 

function maxSubarraySum (arr){
    let maxSum=arr[0];
    //let n=arr.length;

    for (let i =0; i<arr.length; i++){
        let subarraySum=0;
        for ( let j=i; j<arr.length; j++){
            subarraySum+=arr[j]
            if ( maxSum < subarraySum){
                maxSum=subarraySum;
            }

        }
    }
    return maxSum;
}
const arr1 =[-1,-5,-3,2,-1,3];
console.log ( " maximum subArray sum :", maxSubarraySum (arr1))



/*********************************************************************** */

//function to find the largest subarray with sum =k


function largestSubarrayWithSumk(arr,k){

    let length=0;
    let n=arr.length;

    for ( let i=0; i<n; i++){
        let sum=0;
        for ( let j=i; j<n; j++){
            sum +=arr[j];
            if ( sum ===k){
                length=Math.max( length,j-i+1);

            }
        }
    }
    return length ;
}
const arr2=[ 1,2,-3,0,1,-1,1];
console.log( largestSubarrayWithSumk(arr2,0));