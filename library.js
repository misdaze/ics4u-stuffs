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
    while(isNaN(year)==true){
      console.log("Not a number. Please try again.")
      year = prompt("Year published? ")
    }
  library.push(name,author,year,true)
  }

function availBooks(){
  for (let index = 0; index < library.length; index++){
      if(library[index].isAvailable === true){
        console.log(library[index].title + " by " + library[index].author + " is available to be checked out.")
      }
  }
}
function borrowBook(){
  let foundflag = false
  let borrow = prompt("Borrow what book?")
  for (let index = 0; index < library.length; index++){
    if(library[index].isAvailable === true && library[index.name === borrow]){
      console.log(library[index].title + " has been checked out.")
      library[index].isAvailable = false
      foundflag = true
    }
    else if(library[index].isAvailable === false && library[index.name === borrow]){
      console.log(library[index].title + "is unavailable and cannot be checked out.")
      foundflag = true
    }
  }
  if(foundflag === false){
    console.log("No instances found!")
  }
  foundflag = false
}
function checkinBook(){
  let foundflag1 = false
  let checkBook = prompt("Check in what book?")
  for (let index = 0; index < library.length; index++){
    if(library[index].isAvailable === true && library[index.name === borrow]){
      console.log(library[index].title + " is already available!")
      foundflag1 = true
    }
    else if(library[index].isAvailable === false && library[index.name === borrow]){
      console.log(library[index].title + "has been returned.")
      library[index].isAvailable = true
      foundflag1 = true
    }
  }
  if(foundflag1 === false){
    console.log("No instances found!")
  }
  foundflag1 = false
}
function bookByAuthor(){
  let authorcheck = prompt("What author?")
  let foundflag2 = false
  for (let index = 0; index < library.length; index++){
    if(library[index].author === authorcheck){
      console.log(library[index].title + " by " + authorcheck + " is either present or has been checked out at the library!")
      foundflag2 = true
    }
  }
  if(foundflag2 === false){
    console.log("No instances found!")
  }
  foundflag2 = false
}

function bookByYear(){
  let yearcheck = prompt("Before what year?")
  let foundflag3 = false
  for (let index = 0; index < library.length; index++){
    if(library[index].year < yearcheck){
      console.log(library[index].title + " by " + authorcheck + " is either present or has been checked out at the library!")
      foundflag3 = true
    }
  }
  if(foundflag3 === false){
    console.log("No instances found!")
  }
  foundflag3 = false
}

function remover(){
  let bookremoved = prompt("Remove what book?")
  let foundflag4 = false
  for (let index = 0; index < library.length; index++){
    if(library[index].title === bookremoved){
      console.log(library[index].title + " by " + authorcheck + " was successfully removed.")
      library.splice(index,1)
      foundflag4 = true
    }
  }
  if(foundflag4 === false){
    console.log("No instances found!")
  }
  foundflag4 = false
}
