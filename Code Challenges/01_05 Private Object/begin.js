/*
  WRITE YOUR SOLUTION HERE
*/

const username = Symbol(username);
const password = Symbol(password);


class User{
  constructor(username, password, age){
    this.username = username,
    this.password = password,
    this.age = age
  }
};



const diegoLogin = new User(`Diego`,`senha123`,22);
console.log(diegoLogin);

const user = {
  [username]: "emmabostian",
  [password]: "1234566",
  age: 27,
};

console.log(user.username);
