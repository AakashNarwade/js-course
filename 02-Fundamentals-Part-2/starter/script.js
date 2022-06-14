"use strict";

// let hasDriverLIcense= false;
// const passTest=true;
// if (passTest) hasDriverLIcense = true;

// function logger(num) {
//   for (let index = 0; index < 5; index++) {
//     console.log("index is incremented=> ", index, num);
//   }
// }
// logger(4);

// function declaration vs function expression

// function declaration
// const age =  calcAge1(1996);
// function calcAge1(birthYear){
//     return 2022-birthYear
// }
// console.log(age);


// function expression 
const calcAge2 = function(birthYear){

    return 2022-birthYear;
}
const age2 = calcAge2(1995);
// console.log(calcAge2);
// console.log(age2);

// arrow function

// const ageCalc3 = (birthYear)=>{
// return 2022-birthYears
// }
// const age3= ageCalc3(1990);
// console.log(age3);

// const ageCalc3 = birthYear => 2022-birthYear;
// const age3= ageCalc3(1997);
// console.log(age3);

// const yearUntilRetirement = (birthYear,firstName)=>{
// const age = 2022-birthYear;
// const retirement = 65 - age;
// // return retirement;
// return `${firstName} returns in ${retirement} years`
// }
// const retirementAge = yearUntilRetirement(1996,'aakash');
// console.log(retirementAge);


// const fruitCutIntoPieces = function(fruits) {
//     return fruits * 4
// }

// const fruitProcessor = function (apples,oranges) {
//     const applePieces = fruitCutIntoPieces(apples);
//     const orangePieces = fruitCutIntoPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples nd ${orangePieces} pieces of oranges`;
//     return juice ;    
// }
// console.log(fruitProcessor(2,3));
// console.log(5 + "9")

// const yearUntilRetirement = (birthYear,firstName)=>{
//     const age = 2022-birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} returns in ${retirement} years`
//     }

const calcAverage = (s1,s2,s3)=>(s1+s2+s3)/3 ;
let avgDolphin = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);
// console.log(avgDolphin, avgKoalas);

function checkWinner(avgDolphin, avgKoalas){
    console.log(avgDolphin, avgKoalas);
if ((avgDolphin >= 2*avgKoalas )) {
   return console.log(`Dolphin is winner by (${avgDolphin} vs ${avgKoalas})`)
} else if ((avgKoalas >= 2*avgDolphin )){
    return console.log(`Koalas is winner by ${avgKoalas} vs ${avgDolphin}`);
} else{
    return console.log(`no one is winner `);
}

}

// checkWinner(avgDolphin,avgKoalas);

// // Test data 2
// avgDolphin = calcAverage(85,54,41);
// avgKoalas  = calcAverage(23,34,27);
// console.log(avgDolphin,avgKoalas);
// checkWinner(avgDolphin,avgKoalas);

