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
    console.log(starterIndex, mainIndex, address, time);
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

// nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  address: 'hhh',
  time: '22:30',
});
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
