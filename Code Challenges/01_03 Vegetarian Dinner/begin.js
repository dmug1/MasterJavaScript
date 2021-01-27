"use strict";
/*
  WRITE YOUR SOLUTION HERE
*/

const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

const vegetarianOptions = menu.filter(vegetarianDish => vegetarianDish.isVegetarian === true);


function createVegMenu(vegetarianOptions){
  const menuNode = document.querySelector('#menu');
  vegetarianOptions.forEach(function(option){
    let dish = document.createElement("li");
    dish.textContent = option.name;
    console.log(option);
    menuNode.appendChild(dish);
  });
};


createVegMenu(vegetarianOptions);