/*
  WRITE YOUR SOLUTION HERE
*/

coffeeDate = (arr) => {
    let coffeSum = arr.reduce((somaCafe , num) => 
      somaCafe += num
     );   

    return `The total bill is $${coffeSum * 1.25}`;
};

coffeeDate([2, 5, 7, 1, 4]);




console.log(coffeeDate([2, 5, 7, 1, 4]));
