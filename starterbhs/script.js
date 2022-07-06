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

// if (!numberCart) deleteShoppingCart();

// // let numberCart = 10;
// var numberCart = 10;
// function deleteShoppingCart() {
//   console.log('all products are deleted');
// }

// var x = 1;
// let y = 9;
// const z = 10;
// console.log(x === window.x); //true
// console.log(y === window.y); //false
// console.log(z === window.z); //false

// console.log(this);
// const calcage = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //undefined when strict mode , global window object when not in strict mode
// };
// calcage(89);

// const calcArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //window , coz it takes this from parent scope
// };
// calcArrow(89);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2000,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// this keyword always points to the object  it is  calling the method

// const f = jonas.calcAge;
// f();
// undefined ,  coz in f calcage is just a generl function which is not attached to any object .

const jonas = {
  firstName: 'aakash',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`, this),
};

jonas.greet();
