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

// ARRAYS

const friends = ['aakash','lisa','lita'];
const celebs =  new Array("eminem","dino","james");
// console.log(friends,celebs);
const obj = Object.assign(friends);
// console.log((obj));

// EXERCISE

const calcAge =function(birthYear){
    return 2037 -  birthYear;
}
const years = [1996,1997,1998,2000];
// console.log(calcAge(years));

// CODING  CHALLENGE

// const calcTip = function(b){
//     return b>=50 && b<=300 ? b * 0.15 : b * 0.2;
// }


// const bill = (billamount)=>{
// const tip = (billamount/100)*15;
// return tip;
// }

// const bills = new Array(125,555,44);
// // const value1  = bill(100);
// // const value2  = bill(1200);
// // const value3  = bill(300);
// // console.log(value1,value2,value3);
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// INTRODUCTION TO OBJECTS

const aakashArray = [
    'Aakash',
    'Narwade',
    2022-1996,
    'Software Engineer',
    ['Aaaa','Bbbb','Ccc']
]

const aakashObject = {
    firstName : 'Aakash',
    lastName: 'Narwade',
    age:2022-1996,
    job: 'Software Engineer',
    friends : ['Aaa', 'Bbb', 'Ccc' ]
}


// Rough example on null being object type
// function isObject(object) {
//     return typeof object === 'object' && object == null;
//   }
//   isObject({ prop: 'Value' }); // => true
//   isObject(15);                // => false
//  console.log( isObject(null));     
// console.log(Object.assign({},aakashObject['friends']));

const interestedIn = prompt("What do you want to know about Aakash? Choose between firstName, lastName, age , job, friends");
console.log(interestedIn, typeof(interestedIn));

aakashObject.location = "Mumbai";
aakashObject["contact"] = 9999999999;

if (aakashObject[interestedIn]) {
    // console.log(interestedIn);
    console.log(aakashObject[interestedIn]);
    // console.log("interseted in is location");
} else {
    console.log('values are not proper');
}

console.log(aakashObject["friends"].length);

// Challenge 
// Aakash has 3 friends and his best friends is called "Bbb"

const str = `${aakashObject.firstName} has ${aakashObject["friends"].length} best friends and is called ${aakashObject.friends[1]}`;
console.log(str);


