// create a Book class

const { BookType } = require("./utils/calculate");

class Book{
    constructor(title,author,isbn,){
        this.title = title;
        this.author = author;
        this._isbn = isbn; // private property
        this.available = true; //default value
    
    }
    //getter
    get isbn(){
        this._isbn;
    }
    //setter
    set isbn(isbn){
        this._isbn = isbn;
    }

    //method for borrowBook
    borrowBook(){
        if(this.available){
            this.available = false;
            console.log(`${this.title} by ${this.author} is borrowed `);
        } else{
            console.log(`${this.title} by ${this.author} is already borrowed `);
        }
    }
    //method for returnBook
    returnBook(){
        this.available = true;
        console.log(`${this.title} by ${this.author} is returned`);
    }

}
// create a class Library
class Library{
    constructor(){
        this.books = [];
    }
    // method for addBook
    addBook(book){
        this.books.push(book);
        console.log(`${book.title} by ${book.author} has been added to the library.`);
    }
    //method for removeBook
    removeBook(isbn){
        const book = this.books.filter(book => book.isbn !== isbn);{
            if(book){
            console.log(`${isbn} removed from the library`);
        } else{
            console.log(`No book with ISBN ${isbn} found in the library.`);
        }
        }
    }
    // method for finding book by title
    findBookByTitle(title){
        const book = this.books.find(book => book.title === title);{
            if(book){
                console.log(`${book.title} by ${book.author} found in the library`);
            } else {
                console.log(`${title} not found in the library`);
            }
        }
    }
}
// create a digital library

class DigitalLibrary extends Library{
constructor(){
    super();
}
// method for downloadBook
downloadBook(isbn) {
    const book = this.books.find(book => book.isbn === isbn);
    if (book && book.available) {
        console.log(`Downloading ${book.title}...`);
    } else {
        console.log(`Book with ISBN ${isbn} is not available for download.`);
    }
}
}

// test case
const novel1= new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321',);
const novel2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");

const library = new Library();
library.addBook(novel1);
library.addBook(novel2);
library.findBookByTitle("To Kill a Mockingbird");
novel1.returnBook();
novel1.borrowBook();
library.removeBook("000000");

const digitalLibrary = new DigitalLibrary();
digitalLibrary.addBook(novel1);
digitalLibrary.addBook(novel2);
digitalLibrary.findBookByTitle("To Kill a Mockingbird");
digitalLibrary.downloadBook("0987654321");





// add books to library




