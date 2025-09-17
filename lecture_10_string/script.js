//console.log ( " hello prathamesh ");


// function toCamelCase(str) {
//   let words = str.split(" ");
//   let camelcase = words[0].toLowerCase();
//   for (let i = 1; i < words.length; i++) {
//     camelcase += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
//   }
//   return camelcase;
// }

// let str=" convert variable name"; 
// console.log ( toCamelCase(str));



// let string = "student first name";
// let ans = "";
// for(let i = 0; i < string.length; i++){
//     if(string[i] == " "){
//         ans += string[i + 1].toUpperCase();
//         i++;
//     }else{
//         ans += string[i];
//     }
// }
// console.log(ans);

//===========================================================================
// REversed the string 

// let Str="Hello";
// let reversed = Str.split("").reverse().join("");
// console.log (reversed)

//==========================================================================


// find the no of words in string 
// let string= "hello i am coder";
// let words= string.trim().split("");
// console.log (words.length);


//========================================

// let str3="jhjkihkuiouoj"
// function noRepeatFirst(s){
//     for(let i=0;i<s.length;i++){
//         if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
//             console.log(s[i]);
//             return;
//         }
//     }
//     console.log("Every character is repeated")
// }

// noRepeatFirst(str3);

// function StudentRecords(Data) {

//  return Data.filter(student => student.marks > 50);

// }

// let obj = [
//   {"name": "John", "id": 123, "marks": 98},
//   {"name": "Baba", "id": 101, "marks": 23},
//   {"name": "yaga", "id": 200, "marks": 45},
//   {"name": "Wick", "id": 115, "marks": 75}
// ]
// console.log (StudentRecords(obj));




let arr=[1,2,3,4];

let sum=0;

for( let i=0; i<=arr.length; i++){
    sum+=i;

}
console.log (sum);






