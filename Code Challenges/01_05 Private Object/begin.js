/*
  WRITE YOUR SOLUTION HERE
*/

class User{
  constructor(username, password, age){
    this.username = username,
    this.password = password,
    this.age = age
  }
};



const diegoLogin = new User(`Diego`,`senha123`,22);
console.log(diegoLogin);