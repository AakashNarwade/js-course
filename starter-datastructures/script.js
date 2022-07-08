'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '23:00',
  }) {
    // console.log(starterIndex, mainIndex, address, time);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    // console.log(mainIngredients);
    // console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const menu1 = [...restaurant.categories, ...restaurant.mainMenu];
// console.log(menu1);

for (const item of menu1) {
  // console.log(item);
}

for (const key in menu1) {
  // console.log(key + 1);
}

for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu1.entries()]);

console.log(Object.entries(restaurant));

// Coding Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1] = game.players[0];
// const [players2] = game.players[1];

//***************CODING EXERCISE****************//
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const fieldPlayers = []
// gk
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const Players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// game.odds.team1:1.33
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(game.odds);
const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(team1, draw, team2);
// const [,...players1 ]

//SPREAD , because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// //REST ,  because on LEFT side of =
// const [a, b, ...others] = [1, 2, [3, 4, 5]];
// console.log(a, b);
// console.log(others);

// const { p = 1, q = 2, ...r } = restaurant;
// console.log(p, q);
// console.log(r);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // SPREAD in Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // Functions
// const add = function (...args) {
//   console.log(args.length);
//   let sum = 0;
//   for (let index = 0; index <= args.length - 1; index++) {
//     // const element = array[index];
//     // console.log(index);
//     sum += args[index];
//   }
//   return sum;
// };

// // add(2, 3);
// const x = [23, 5, 7];
// console.log(add(3, 3, 4, 4, 5));
// console.log(add(...x));

//*********************The Spread Operator**********//

// nested objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 2,
//   address: 'hhh',
//   time: '22:30',
// });
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const { name: restaurantName, openingHours: hours } = restaurant;
// console.log(restaurantName, hours);

// adding default values while destructuring objects
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
// let a = 111;
// let b = 999;
// let c, d;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b, c = 1, d = 1 } = obj);
// console.log(a, b, c, d);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// let temp = main;

// main = secondary;

// secondary = temp;
// console.log(main, secondary);

// interchange values in array using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// REceive 2 return values from a function using destructuring
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];

// const [l, , [m, n]] = nested;
// console.log(l, m, n);
// // const [a, b, c] = nested;
// // console.log(a, b, ...c);

// const [i, , j] = nested;
// // console.log(i, j);

// // Default values
// const [p, q, r] = [1, 2];
// console.log(p, q, r); //undefined

// const [a = 1, b = 1, c = 1] = [1, 2];
// console.log(a, b, c);
