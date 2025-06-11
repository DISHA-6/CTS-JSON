// const user = require("./users.json")
// console.log(user)
// const data = JSON.parse(user)
// console.log(data)

const fs = require("fs")
const dataJSON = fs.readFileSync("users.json")
const data = JSON.parse(dataJSON)
console.log("Name: ",data[0].name)
console.log("Skills: ",data[0].skills)

data.forEach(user=>{
    console.log(`${user.name}'s skills: ${user.skills.join(". ")}`)
})