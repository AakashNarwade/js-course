'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const outputAge = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(outputAge);
//     var millenial = true;
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Ohh ohh you are a millenial ${firstName}`;
//       function sum(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // var is function scope thats why it ignores the block  scope and search for variable value upwards in function block .

//     console.log(sum(5, 6));
//     // In use strict  mode the scope of the function is block scope , but if you remove the use strict mode then it can run
//   }
//   printAge();

//   return age;
// }

// const firstName = 'aakash';
// calcAge(1996);

// Hoisting in variables
// console.log(me); //undefined
// console.log(job);
// var me = 'aakash';
// let job = 'software engineer';
// const year = 1996;

// Hoisting in functions
// console.log(addDecl(6, 8)); //14
// console.log(addExpr(9, 7));
// console.log(addExpr(3, 4)); //addExpr on lno 48 is declared as var and hence value is undefined , i.e undefined(3,4) which gives error addExpr is not a function

// console.log(addArrow(8, 7));
function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// boolean value of undefined is always false.The value of Not only undefined but also null, false, NaN, empty string is also false.
// console.log(!numberCart);
// console.log(typeof undefined);

if (!numberCart) deleteShoppingCart();

var numberCart = 10;
function deleteShoppingCart() {
  console.log('all products are deleted');
}
