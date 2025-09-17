/*
sorting =
Data is arrange in specific manner such that we can know & take 
*/



//TC= 
//SPC=


function sorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
        return arr;
    }

}
console.log(sorting([4, 1, 3, 7, 5]));


//********************************************************************************************/

//Bubble sort 

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap using destructuring
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 5, 1, 3, 2]));




