let library = [];

//1) adding objects to the library
library.push({
    title: "The Great Gatsby",
    author: "F, Scott Fitzgerald",
    yearPublished: "1925",
    available: true
});

library.push({
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: "1960",
    available: true
});

library.push({
    title: "1984",
    author: "George Orwell",
    yearPublished: "1949",
    available: false
});

library.push({
    title: "Pride of Prejudice",
    author: "Jane Austen",
    yearPublished: "1813",
    available: true
});
// console.log(library);

//2) Find the index of the book with available set to false.
let index = library.findIndex(book => !book.available);

// console.log(index);

//Update the availabilt of thr book at the found index
library[index].available = true;

// console.log(library);


// 3) Removing a book from an Array
// since  "Pride of Prejudice" is the last book in the array 

library.splice(library.length -1, 1);

// console.log(library);

// 4) Check if the "Great Gatsby", is in the library using the includes method

let bookTitles = library.map(book => book.title);

//Check if a book is in the library 
// let isBookInLibrary = bookTitles.includes("Pride of Prejudice");
let isBookInLibrary = bookTitles.includes("To kill a Mockingbird");

// console.log(isBookInLibrary);

// 5) Update the available book to false and remove the first book from the Array

library[0].available = false;
let borrowedBook = library.shift();

//display the updated book details
// console.log("Borrowed Book:");
// console.log(borrowedBook);

// console.log("Updated Library:");
// console.log(library);