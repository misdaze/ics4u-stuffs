const prompt = require('prompt-sync')()
let library = [
    { title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isAvailable: true }
  ];
  function addBook(){
    let name = prompt("Book name? ")
    let author = prompt("Book author? ")
    let year = prompt("Year published? ")
    let avail = prompt("Currently available? (true/false) ")
  }