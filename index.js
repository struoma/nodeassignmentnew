require("./script");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 8000;

//inbuilt
//local
//third party
// const message = "\nWe have made it and this is not the end";

const assignment = "\nNew assignment two";

// fs.writeFile("./message1.txt", message, (err) => {
//   if (err) throw err;
// });

fs.writeFile("./as.txt", assignment, (err) => {
  if (err) throw err;
});

fs.appendFile("./assignment.txt", assignment, (err) => {
  if (err) throw err;
  console.log("Updated");
});

// fs.unlink('./message1.txt',(err)=>{
//     if(err) throw err
//     console.log('file deleted')

// })

fs.readFile("./assignment.txt", (err, data) => {
  try {
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
});

// require("./server");

app.get("/", (req, res) => {
  res.send("This is a new beginning");
  console.log("app works fine");
});

app.get("/dimension", (req, res) => {
  res.send("This is a new dimension page");
  console.log("app works fine");
});

app.listen(8000);
