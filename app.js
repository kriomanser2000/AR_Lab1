const http = require("http");
http.createServer(function(reuqest, response)
{
    response.end("Hell Node11!");
}).listen(3000, "127.0.0.1", function()
{
    console.log("Server started in port 3000.");
});
//D:\Progs\NodeJS\node.exe .\app.js
//Server started in port 3000.

const os = require("os");
const greeting = require("./greeting");
let userName = os.userInfo().username;
console.log(`Data Request: ${greeting.date}`);
console.log(greeting.getMessage(userName));
const User = require("./user.js");
//D:\Progs\NodeJS\node.exe .\app.js
//Data Request: Fri Jun 07 2024 18:06:07 GMT+0300 (Eastern European Summer Time)
//Good Evening, SuperDuperPCsasa

let user1 = new User("Svarog", 35);
user1.sayHi();
//D:\Progs\NodeJS\node.exe .\app.js
//Data Request: Fri Jun 07 2024 18:13:33 GMT+0300 (Eastern European Summer Time)
//Good Evening, SuperDuperPCsasa
//Hail Wotan! My name is Svarog
//Server started in port 3000.