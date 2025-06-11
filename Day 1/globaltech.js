const fs = require("fs");

function parseJSONData(){
    const jsonFilePath = 'globaltech.json'

    fs.readFile(jsonFilePath,(err,data)=>{
        if(err){
            console.error("Error reading globaltech.json",err);
            return;
        }
        try{
            const jsonData = JSON.parse(data);

            console.log("----- JSON Parse Example with Filters ------")
            console.log("Parsed JSON Data(JavaScript Object): ");
            console.log(JSON.stringify(jsonData,null,2)) //jsonviewer
           //console.log(JSON.stringify(jsonData)) //api json data

           console.log("\n Accessing Data:");
           console.log(`Company name: ${jsonData.companyName}`)
           console.log(`Headquarters City: ${jsonData.headquarters.city}`)
           console.log(`First Department Name: ${jsonData.departments[0].name}`)
           
           //First Filter
           console.log("\n Department Names and Budgets: ");
           jsonData.departments.forEach(dept =>{
            //console.log(` - ${dept.name}: ${dept.budget}`)
            console.log(` - ${dept.name}: ${dept.budget.toLocaleString()}`)
           })

           //second filter
           console.log("\nSkills of Alice Smith: ");
           const alice = jsonData.departments[0].employees.find(emp=>emp.firstName==="Alice");
           if(alice){
            console.log(alice.skills.join(", "))
           }

           //third filter - List all employees with Skill = "Python"
           console.log("\nEmployees with 'Python' Skill:")
           const employeeswithPython = jsonData.departments
           .flatMap(dept=>dept.employees || [])
           .filter(emp => emp.skills?.includes("Python"))
           //console.log(employeeswithPython);
           employeeswithPython.forEach(emp =>{
            console.log(` - ${emp.firstName} ${emp.lastName}`)
           })
           
           //fourth filter - Departments with Budget > 1 million
           console.log("\n Departments with Budget > $1 Million:");
           const bigBudgetDepartments = jsonData.departments
           .filter(dept=>dept.budget>1000000)
           bigBudgetDepartments.forEach(dept =>{
            console.log(` - ${dept.name}: ${dept.budget.toLocaleString()}`)
           })

           //fifth filter - Display the project worked by Bob Johnson 
           console.log("\n Projects for Bob Johnson: ")
           const bob = jsonData.departments
           .flatMap(dept => dept.employees || [])
           .find(emp => emp.firstName === 'Bob' && emp.lastName === 'Johnson')

           if(bob?.projects){
            bob.projects.forEach(project =>{
                console.log(` - ${project.name} (Status: ${project.status})`)
            })
           }
           else{
            console.log("No projects found or Bob not listed.")
           }

           //Filter 6 - Find Produts Released After 2022
           console.log("\nProducts with any Version Released After 2022:");
           const recentProducts = jsonData.products.filter(product =>
            product.versions.some(v=>new Date(v.releaseDate)>new Date('2022-01-01'))
        )
           recentProducts.forEach(prod=>{
            console.log(`-${prod.name}`)
           })

           //Filter 7 - List All unique Skills in the Company
           console.log("\n All Unique Skills Across Departments:")
           const allSkills = new Set(
            jsonData.departments
            .flatMap(dept => dept.employees || [])
            .flatMap(emp => emp.skills || [])
           );
           console.log([...allSkills].join(", "))

        }
        catch(error){
            console.error("Error parsing JSON: ",error)
        }
    })
}

parseJSONData();

// Observations from globaltech.json:

// "companyName": String
// "foundedYear": Number
// "isActive": Boolean
// "headquarters": Object
// "departments": Array of Objects
// "employees" (inside departments): Array of Objects
// "skills": Array of Strings
// "projects": Array of Objects
// "products": Array of Objects
// "versions": Array of Objects
