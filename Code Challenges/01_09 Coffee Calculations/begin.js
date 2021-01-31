/*
  WRITE YOUR SOLUTION HERE
*/

coffeeDate = (arr) => {
    let coffeSum = arr.reduce((somaCafe , num) => 
      somaCafe += num
     );   

    return `The total bill is $${coffeSum * 1.25}`;
};

console.log(coffeeDate([22222, 5, 7, 12, 4,70]));
