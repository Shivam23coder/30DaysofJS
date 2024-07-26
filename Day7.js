// Altivity 1. Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const obj1 = {'title':'Harry Potter','author':'JK Rowling','year':'2001'};
console.log(obj1);

// Task 2. Access and log the title and author properties of the book object.
console.log(obj1.title,obj1.author,);

// Activity 2: Onget Methods
// Task 2: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
function string(obj){
    return obj.title+obj.author;
}
console.log(string(obj1));

// Task 4. Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
function modify(obj,year){
    obj.year = year;
}
modify(obj1,2005);
console.log(obj1);

// Activity 3: Nected Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {'name' : "Shree Library", 'books': ["Harry Potter","Physics","Chemistry"]};
console.log(library);

//  Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name," ",library.books);

// Actility 4. The this Keyword
// Task 7. Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the rest of calling this method.
library = {'name': "Shree Library", 'books': [{'title':"Harry Potter",'year':'2005','author':'jk rowling',getDetails: function(){
    return `${this.title}, ${this.year}`;
}},{'title':"Physics",'year':'2015','author':'ML sharma',getDetails: function(){
    return `${this.title}, ${this.year}`;
}},{'title':"Chemistry",'year':'2018','author':'Ram nihal',getDetails: function(){
    return `${this.title}, ${this.year}`;
}}]
}

console.log(library.books[0].getDetails());
console.log(library.books[1].getDetails());
console.log(library.books[2].getDetails());

// Activity 5. Object Turation
// Task 8: Use a for in loop to iterate over the properties of the book object and log each property and it's value
library.books.forEach(book =>{
    for(let x in book)
        console.log(x ,":",book[x]);
})

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
//DIY



library.books.forEach((book) =>{
    let key = Object.keys(book);

    let value = Object.values(book);

    key.forEach((key,index) =>{
        console.log(`${key}: ${value[index]}`);
    });

    console.log('----');
})
// console.log(library.books)