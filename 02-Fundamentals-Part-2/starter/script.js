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
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};
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

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
let avgDolphin = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphin, avgKoalas);

function checkWinner(avgDolphin, avgKoalas) {
    console.log(avgDolphin, avgKoalas);
    if (avgDolphin >= 2 * avgKoalas) {
        return console.log(`Dolphin is winner by (${avgDolphin} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphin) {
        return console.log(`Koalas is winner by ${avgKoalas} vs ${avgDolphin}`);
    } else {
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

const friends = ["aakash", "lisa", "lita"];
const celebs = new Array("eminem", "dino", "james");
// console.log(friends,celebs);
const obj = Object.assign(friends);
// console.log((obj));

// EXERCISE

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1996, 1997, 1998, 2000];
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

// const aakashArray = [
//     "Aakash",
//     "Narwade",
//     2022 - 1996,
//     "Software Engineer",
//     ["Aaaa", "Bbbb", "Ccc"],
// ];

// const aakashObject = {
//     firstName : 'Aakash',
//     lastName: 'Narwade',
//     age:2022-1996,
//     job: 'Software Engineer',
//     friends : ['Aaa', 'Bbb', 'Ccc' ]
// }

// Rough example on null being object type
// function isObject(object) {
//     return typeof object === 'object' && object == null;
//   }
//   isObject({ prop: 'Value' }); // => true
//   isObject(15);                // => false
//  console.log( isObject(null));
// console.log(Object.assign({},aakashObject['friends']));

// const interestedIn = prompt("What do you want to know about Aakash? Choose between firstName, lastName, age , job, friends");
// console.log(interestedIn, typeof(interestedIn));

// aakashObject.location = "Mumbai";
// aakashObject["contact"] = 9999999999;

// if (aakashObject[interestedIn]) {
//     // console.log(interestedIn);
//     console.log(aakashObject[interestedIn]);
//     // console.log("interseted in is location");
// } else {
//     console.log('values are not proper');
// }

// console.log(aakashObject["friends"].length);

// // Challenge
// // Aakash has 3 friends and his best friends is called "Bbb"

// const str = `${aakashObject.firstName} has ${aakashObject["friends"].length} best friends and is called ${aakashObject.friends[1]}`;
// console.log(str);

// ****************OBJECT METHODS*******************
// this keyword
// ********Challenge********
// Aakash is 25-year old Software Engineer , and he has a/no driver license

// const aakashObject = {
//     firstName : 'Aakash',
//     lastName: 'Narwade',
//     birthYear:1996,
//     job: 'Software Engineer',
//     friends : ['Aaa', 'Bbb', 'Ccc' ],
//     hasDriversLicence: true,
//     calcAge: function(){
//         // console.log(this)
//         // return 2037-this.birthYear
//         return  this.age = 2022 - this.birthYear;
//         //  return this.age;
//     },
//     getSummary: function(){
//        return `${this.firstName} is ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicence ? "a" : "no"} drivers license`
//     }
// }

// console.log(aakashObject.calcAge())
// console.log(aakashObject.getSummary())
// console.log(aakashObject.age)
// console.log(aakashObject.age)
// console.log(aakashObject.age)

// **********CODING CHALLENGE 3**************

// const markMiller = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.markBMI = (this.mass) / (this.height * this.height);
//         return this.markBMI;
//     },
// };

// const johnSmith = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.johnBMI = (this.mass) / (this.height * this.height);
//         return this.johnBMI;
//     },
// };

// console.log(markMiller.calcBMI() > johnSmith.calcBMI()
//     ? `${markMiller.fullName}'s BMI(${markMiller.markBMI}) is higher than ${johnSmith.fullName}'s BMI(${johnSmith.johnBMI})`
//     : `${johnSmith.fullName}'s BMI(${johnSmith.johnBMI}) is higher than ${markMiller.fullName}'s BMI(${markMiller.markBMI})`)


// ****** break,continue in loop***********

// Continue is to exit the current iteration of the loop and continue to the next one.
//  Break is used to completely terminate the whole loop.

// const aakashArray = [
//     "Aakash",
//     "Narwade",
//     2022 - 1996,
//     "Software Engineer",
//     ["Aaaa", "Bbbb", "Ccc"],
// ];

// const types = [];

// for (let i = 0; i < aakashArray.length; i++) {
//     // contiue=>
//     // if (typeof aakashArray[i] !== 'string') continue;
//     // console.log(aakashArray[i]);
//     // populating the array
//     types.push(typeof aakashArray[i]);
//     // types[i]=typeof aakashArray[i]

//     // break out the loop if we get the number
//     if(typeof aakashArray[i] == 'number') break;
// }
// console.log(types);

// Looping backwards and loop in loop

// const aakashArray = [
//     "Aakash",
//     "Narwade",
//     2022 - 1996,
//     "Software Engineer",
//     ["Aaaa", "Bbbb", "Ccc"],
// ];
// // for(let i = aakashArray.length-1; i >=0 ; i--){
// //     console.log(i);
// //     console.log(aakashArray[i]);
// // }

// for(let exercise = 1; exercise <=3; exercise++) {
//     console.log(`this is exercise number ${exercise}`);
//     for(let repitition = 1;  repitition <=5; repitition++){
//         console.log(`Repition number ${repitition}`);
//     }
// }


// ****************while loop*************

// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice != 6) {
//     console.log(`dice is ${dice}`);
//  dice = Math.trunc(Math.random() * 6) + 1;
//  if(dice == 6) console.log(`dice is equal to ${dice}`)
// }

// *********** CODING CHALLENGE 4 ************

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip = function (b) {
//     return b >= 50 && b <= 300 ? b * 0.15 : b * 0.2;
// }
// const newBill = (billamount)=>{
//     let tip = (billamount/100)*15;
//     // const tv = billamount + tip;
//     return tip;
//     }
// const totalValue = (t)=>{
//     const tv = t + tip;
//     return tv;
// }

// for (let i = 0; i < bills.length; i++) {
//     // console.log(calcTip(bills[i]));
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i])

// }
// // console.log(tips);
// // console.log(totals);

// function calcAverage1(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {

//          sum = sum + arr[i];
//     }
//     return sum/arr.length
// }
// console.log(calcAverage1(totals));


// In objects you can use for in loop to get property/keys , but cannot use for of loop, In order to access the value check below example\

// ***********EXAMPLE**************
let play = {
    1:"cricket",
    2:"rugby",
    3:"basketball"
}

for (const i in play) {
   console.log(i); 
}
// OUTPUT console.log(play[i]) ===>   :    cricket rugby basketball
// OUTPUT console.log(i) ====> :  1 2 3

// You can use both for in and for of loop to get keys and values respectively


// ***********EXAMPLE**************
let games = ["soccer", "chess", "badminton"]

for (const i in games) {
    console.log(i)
}
// for in
// OUTPUT : 0 1 2 ==> gives keys 

for (const i of games) {
    console.log(i);
}
// for of
// OUTPUT console.log(i) ====> : soccer chess badminton 



