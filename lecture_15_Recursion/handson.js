/*
write the function to printthe sum of number 
 */


function NumberSum(N) {
  if (N === 0) {
    return 0;
  }
  return N + NumberSum(N - 1);
}
console.log (NumberSum(5));



/* Write the function to write the print the  */

function gcdSum(a, b) {

    while (a != 0) {
        let temp = a;
        a = b % a;
        b = temp;
    }
    return b;
}
console.log(gcdSum(15, 25))


// in the gcd the largest num which is divisiable the given num :
