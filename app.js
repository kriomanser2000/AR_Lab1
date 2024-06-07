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

/*
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
*/

/*
module.exports.name = "Alice";
var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`); //Hello Alice
var greeting2 = require("./greeting.js");
greeting2.name = "Bob";
console.log(`Hello ${greeting2.name}`); //Hello Bob
console.log(`Hello ${greeting1.name}`); //Hello Bob
//D:\Progs\NodeJS\node.exe .\app.js
//Data Request: Fri Jun 07 2024 18:25:55 GMT+0300 (Eastern European Summer Time)
//Good Evening, SuperDuperPCsasa
//Hail Wotan! My name is Svarog
//Hello undefined
//2
//Hello Bob
//Server started in port 3000.
*/

const welcom = require("./welcome");
welcom.getMorningMessage();
welcom.getEveningMessage();
//D:\Progs\NodeJS\node.exe .\app.js
//Data Request: Fri Jun 07 2024 18:25:55 GMT+0300 (Eastern European Summer Time)
//Good Evening, SuperDuperPCsasa
//Hail Wotan! My name is Svarog
//Hello undefined
//2
//Hello Bob
//Server started in port 3000.

//other greeting requires commented 
const greeting = require("./greeting");
global.name = "Serhii";
global.console.log(date);
console.log(greeting.getMessage());
//D:\Progs\NodeJS\node.exe .\app.js
//Good Morning
//Good Evening
//Fri Jun 07 2024 18:47:05 GMT+0300 (Eastern European Summer Time)
//Good Evening, Serhii
//Server started in port 3000.