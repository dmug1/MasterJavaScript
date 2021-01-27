class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

/*
  WRITE YOUR SOLUTION HERE
*/

class TechnicalBook extends Book{
  constructor(title, author, ISBN, numCopies, version) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }
  
  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
};

const LivroTecnico = new TechnicalBook("Livro Tecnico", "Suzanne Collins", 123919, 5,1);
console.log(LivroTecnico);