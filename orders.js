const fs=require("fs")

const jsonData = fs.readFileSync("orders.json")
const order = JSON.parse(jsonData)

console.log("================ Order Details ============")

order.orders.forEach( or =>{
    console.log(`ID: ${or.order_id}`)
    console.log(`Name: ${or.customer}`)
    console.log(`Items: ${or.items.join(", ")}`)
    console.log(`Total Amount: ${or.total_amount}`)
    console.log(`Date: ${or.order_date}`)
    console.log(`Status: ${or.status}`)
    console.log("-----------------------------------------")
})