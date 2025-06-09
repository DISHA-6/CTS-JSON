//book - JavaScript Object
const fs =require("fs")
const book = {
    title : "Node JS Book",
    year: 2002,
    author: "James Bond"
}

const bookJSON = JSON.stringify(book); //Encoding
console.log(book)
console.log(bookJSON)
console.log(book.title)
console.log(bookJSON.title)
const bookParse = JSON.parse(bookJSON) //Decoding
console.log(bookParse.title) 
console.log(bookParse.author)
fs.writeFileSync("book.json",bookJSON)