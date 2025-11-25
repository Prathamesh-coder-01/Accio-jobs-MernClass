// todays class Bobble sort , stable sort, unstable  , Selection sort.


// Bubble sort is -> stable
// slection sort is -> unstable 
 

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

                // Swap using 

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 5, 1, 3, 2]));

//====================

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element
        let minIndex = i;

        // Find the index of the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap if a smaller element was found
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));
