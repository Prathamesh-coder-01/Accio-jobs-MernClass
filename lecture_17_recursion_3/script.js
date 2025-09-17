// console.log ("prathamesh Dabhade");


// // give a paranthesis sequence deference if its valid or not 

// //s= "()()(())"valid
//   // = "()())"invalid ;
//   // ()(())( invalid ;

// function isValidParenthesis(str) {
//   let balance = 0;

//   for (let ch of str) {
//     if (ch === '(') {
//       balance++;
//     } else if (ch === ')') {
//       balance--;
//       if (balance < 0) 
//         return false; // more ')' than '('
//     }
//   }

//   return balance === 0; // must be balanced
// }

// console.log ( isValidParenthesis("()()(())"));
// console.log ( isValidParenthesis("()()(()" ));
// console.log ( isValidParenthesis("()()(())"));
// console.log ( isValidParenthesis(""));




// // given parenthasis '(' & ')' is valid or invalid 

// function isValidParenthesis(str) {
//     let n = str.length;
//     if (n % 2) return false;
//     let open;

//     for (let i = 0; i < n; i++) {
//         if (str[i] === '(') open++;
//         else {
//             if (open > 0) open--
//         }


//     }

// }
// console.log("(((()))()())", isValidParenthesis("(((()))()())"));

// console.log("((())))", isValidParenthesis("((())))"));

// console.log("()()()(())", isValidParenthesis("()()()(())"));

// console.log("()()()(())", isValidParenthesis("()()()(())"));


//************************************************************************** */


// given all pranthasis of length N
let allValidPranthasis = [];
function aValidPranthasis(n, str = "", ind = 0, open = 0, close = 0) {
    if (open < close) {
        return;
    }
    if (ind === 0) {
        if (open == close) {
            allValidPranthasis.push(str);
        }
        return;

    }
    aValidPranthasis(n, str + "(", ind + 1, open + 1, close);
    aValidPranthasis(n, str + ")", ind + 1, open, close + 1);

}
aValidPranthasis(6);
console.log({ allValidPranthasis })



//******************************************************************** */

// string permutation //



function permutation(str, i, j) {
    if (i === j) return str;
    let arr = str.split("");
    [arr[i], arr[j]] = [arr[j], arr[i]];
    str = arr.join("");
    return str;

}
console.log(permutation("abc", 0, 0));
console.log(permutation("abc", 0, 1));
console.log(permutation("abc", 0, 2));
console.log(permutation("abc", 1, 2));

// ***********************************************************************

let strPermutations = [];

function permutation(str, ind = 0) {

    if (ind == str.length - 1) {
        strPermutations.push(str);
        return;
    }
    for (let i = ind; i < str.length; i++) {
        let swap = swap(str, ind, i);
        permutation(swappedStr, ind + 1);
    }
}
console.log(permutation())




