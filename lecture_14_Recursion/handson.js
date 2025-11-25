function prinRevNum(n) {
    if (n === 0) return;
    console.log(n);
    prinRevNum(n - 1)
}
prinRevNum(5);

//******************************************************************************** */


/*print the num from 1-10  */

function printNum(N){
    if (N===0)return;
    printNum(N-1);
    console.log (N)
}
printNum(10);