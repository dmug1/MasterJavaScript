/*
  WRITE YOUR SOLUTION HERE
*/

let countStart = 1;
let countPalavra = 0;

function calcPossibility(palavra){

  if (palavra.length === 1) {
    return 1;
  }

  return palavra.length * calcPossibility(palavra.slice(1));
};


console.log(calcPossibility("123"));