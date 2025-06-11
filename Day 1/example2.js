const fs = require("fs")
const data = fs.readFileSync("book.json")
//console.log(data)
//console.log(data.toString())
const dataBuffer = data.toString()
const dataParse = JSON.parse(dataBuffer) //decoding
console.log(dataParse.title)