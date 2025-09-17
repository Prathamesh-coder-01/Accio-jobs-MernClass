// const arr=[1,2,3,4,5];

// console.log (arr);

// const arr1=[10,11,12];

// console.log (arr + " "+ arr1)


// const iplTeam=[Mi,CSk,Rcb,Dc];

// const iplTeam2=[ ]

// let arr= [ 1[1,2,3],4,5,"class"];

// console.log (arr[4][3]);

//=====================================================================================
// const iplTeam=["Mi,CSk,Rcb,Dc"];
// const arr2= new Array["18"];
// console.log ( iplTeam ,arr2)


//===========================================================
// const iplTeams =["Mi" , "csk" , "rcb" , "dc" ];
//  console.log(iplTeams.length ) ;    //calculate the length 


//  //index of Arrays:
//  console.log (iplTeams[2]); //give the element .

// //*[push  method ]
//  console.log ( iplTeams.push("kkr","srh"));
//  console.log ( iplTeams);// push method add the element in the last 

//  //* [ pop method ]
//  console.log ( iplTeams.pop() );
//  console.log ( iplTeams);   // pop method Deleat the last element from Array 


//  //*concat method 
//  const newArray=["Gt"," Rr"];
//  console.log (iplTeams)
//  console.log ( iplTeams.concat( newArray));


//  //*[ unshift Array method ]
// let palyerNAme = ["Rohit", "Virat", "KL Rahul"]; 
// palyerNAme.unshift(iplTeams,"Dhoni");  // adds element at the beginning of array 
// console.log(palyerNAme);


// //shift method 
// let name1 =[ "Rohit", "Virat", "KL Rahul"]
// name1.shift();
// console.log( name1) ;       // remove the first element from array :



// =======================================================

// function myName1(){

//     console.log ( " My NAme is Prathamesh Bhausaheb Dabhade ");// function Body 

// }
// myName1() // Function call 


//--------------------------------------------------------------------------------------
// function addationOfNum(a, b) {
//     sum = a + b;
//     console.log("sum =", sum);
// }
// addationOfNum(10, 10);

// //op= sum= 20

//----------------------------------------------------------------------------------
// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num +" X "+ i +" = "+ (num * i));
//     }
// }
// multiplicationTable(15);

//op
// 15 X 1 = 15
// 15 X 2 = 30
// 15 X 3 = 45
// 15 X 4 = 60
// 15 X 5 = 75
// 15 X 6 = 90
// 15 X 7 = 105
// 15 X 8 = 120
// 15 X 9 = 135
// 15 X 10 = 150



/************************************************************************/
// let num =5;
// sum=0;
// for (let i=1; i<=5;i++){
    
// console.log(sum +i);
// }

 //

// function printTriangle(){
// for ( let i=1;i<=6; i++){
//     let row =" ";

//     for ( let j=1; j<=i; j++){
//         row +=j ;
//     }
//     console.log (row);
// }
// }
// printTriangle( 6);


//op =
// 1
//  12
//  123
//  1234
//  12345
//  123456 

 //*********************************************************************************************/

//  let num =5; 
//  console.log (num*num); 



 function factiorial (n){
    let fact =1;
    for ( let i=1;i<=n; i++){
       fact= fact*i;
    }
    console.log ( fact);


 }
 factiorial(5);