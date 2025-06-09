const fs = require("fs")

//Read Feedback data
const jsonData = fs.readFileSync("feedbacks.json")
const output = JSON.parse(jsonData) //decoding - JS Object

console.log("======= User Feedback ======");
output.feedbacks.forEach(fb => {
    console.log(`Username: ${fb.username}`);
    console.log(`Rating: ${fb.rating}`);
    console.log(`Comment: ${fb.comment}`);
    console.log(`Date: ${fb.submitted_on}`)
    console.log(`Category: ${fb.category}`)
    console.log("------------------------------")
})

