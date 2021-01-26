"use strict";

/*
  WRITE YOUR SOLUTION HERE
*/

  class Book{
    constructor(ISBN,title,author,ncopies){
    this.ISBN = ISBN,
    this.title = title,
    this.author = author,
    this.ncopies = ncopies
   }

   //getter
     get Availability(){
       return this.checkAvailability
    }
        
    // Method to get number of copies
    checkAvailability(){
      if (this.ncopies === '0'){
        return "No stock";
      } else if (this.ncopies <=10){
        return " Low stock";
      } else {
        return "In stock";
      }
    }

    sell(){
      if (this.ncopies >=1){
        this.ncopies -= 1;
        return(this.ncopies);
      } else {
        console.log('No stock')
        return (false);
      }
    }

    restock(numCopiesStocked = 5) {
      this.ncopies += numCopiesStocked;
    }

  };



let LOTR = new Book('1234','Lord of the rings','J.R.R. Tolkien','10');
let theRing = new Book('4567','The Ring','Marlon Brando','11');
let getThings = new Book('8745','Get Things Done','Anna Clark','0');

console.log(LOTR);
console.log(LOTR.Availability());

console.log(theRing);
console.log(theRing.Availability());

console.log(getThings);
console.log(getThings.Availability());

