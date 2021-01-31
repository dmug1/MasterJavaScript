/*
  WRITE YOUR SOLUTION HERE
*/


const menuTrucks = [['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']];

const menuTratado = new Set();

const tratarMenu = (arr)  => { 
  const uList = document.querySelector("#combined-menu");

  //flatens menu to a set
  let flatMenus = arr.flat();
  flatMenus.forEach(em => {
    menuTratado.add(em)
  });

  //create list and add to html
  menuTratado.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option;
    console.log(dish);
    uList.appendChild(dish);
  });
};


tratarMenu(menuTrucks);


