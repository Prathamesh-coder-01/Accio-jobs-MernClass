
// //QUESTION 1:
// // FIND THE FREQUENCY OF EACH ELEMENT IN ARR;


// const arr=[ 1,2,3,2,,51,3,2];
// let map=new Map();

// for ( let i=0; i<arr.length; i++){
//     if ( map.has (arr[i])){
//         map.set(arr[i],map.get(arr[i]+1));
//     }else{
//         map.set (arr[i],1);
//     }
// }

// // for( let key of map.key){
// //     console.log ( key ,map.get(key));
// // }
// for ( let [key ,value] of map){
//     console.log ({key,value});
// }








// //question  remove duplicate fron the given arr

// let arr=[1,2,3,4,2,4,5,1,3,3,1];

// let set =new Set(arr);
// console.log (set);

// // step 2 using sprade opperator(...new set)
// console.log ( ...new Set(arr));


// // ANAGRAM 3:

// function areAnagrams(str1, str2) {
//     str1 = str1.toLowerCase().replace(" ");
//     str2 = str2.toLowerCase().replace(" ");

//     if (str1.length !== str2, length) return false;


//     let freq = new Map();

//     for (let ch of str1) {

//         freq.set(ch, (freq.get(ch) || 0) + 1);
//     }

//     for (let ch of str1) {
//         if (!freq.has(ch)) return false;
//         freq.set(ch, freq.get(ch) - 1);


//         if (freq.get(ch) === 0) freq.deleat(ch);
//     }

//     return freq.size === 0;
// }
// console.log ( areAnagrams("listen","silent"));

// let a= "listen";
// let b= "silent";

// function isAnagram(a, b) {

//     if (a.length !== b.length) {
//         return false;
//     }

//     let freqObj = {};

//     for (let i = 0; i < a.length; i++) {

//         freqObj[a[i]] = freqObj[a[i] || 0] + 1;

//     }

//     for (let i = 0; i < b.length; i++) {
//         if (!freqObj[b[i]])return false; 
//         freqObj[b[i]]=freqObj[b[i]]-1;

//     }
//     for (let value of Object.values(freqObj)) {
//         if (value) return false;
//     }
//     return true;
// }
// console.log(isAnagram(a,b))


// // QUESTION 4: find the frequency of all thre words in para

// const paragraph = "Hello how are you How was your day Did you eat how did you find that";

// let words = paragraph.trim().toLocaleLowerCase().split(" ");

// let map = new Map();


// for (let word of words) {

//     map.set(word, (map.get(word) || 0) + 1)
// }
// console.log(map);




// //***************************RECURSION*************** */
// // BAhane dhundne he ki recersive fun ko kis tarha se reuse kar sake

// function factorial(N){

//     if (N==0) return 1;

//     let fact= N*factorial(N-1);
//     return fact ;

// }
// console.log (factorial(5));
// console.log (factorial(2));
// console.log (factorial(6));
// console.log (factorial(4));


// // print number from 1 to N :

// function printNum(N) {

//     if (N == 0) return 1;

//     printNum(N - 1);
//     console.log(N)

// }
// printNum(5);



// print from n -1

function printNumto1(N) {

    if (N == 0) {
        return;
    }
    console.log(N);
    printNumto1(N - 1);
}
printNumto1(5)

let a = 5;
let b = 7;

length = (a * b);
perameter = 2 * (a + b);

console.log(length);
console.log(perameter);












