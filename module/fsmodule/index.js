const fs = require("fs");


// Non blocking io model
fs.writeFile("file.text","data is added to file",()=>{
    console.log("Data is succesfully added");
})

const b = fs.writeFileSync("file2.text","data entered");
console.log(b);

// fs.readFile("file.text","utf-8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// })

// fs.appendFile("file.text", "data is added again and again",(err)=>{
//     console.log(err);
// })

// fs.rename("file.text", "demo.text",(err)=>{
//     console.log(err);
// });

fs.unlinkSync("demo.text");

console.log("SimplyJs subscribe");