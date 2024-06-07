//1.
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

//2.
const os = require("os");
const greeting = require("./greeting");
let userName = os.userInfo().username;
console.log(`Data Request: ${greeting.date}`);
console.log(greeting.getMessage(userName));
//D:\Progs\NodeJS\node.exe .\app.js
//Data Request: Fri Jun 07 2024 18:06:07 GMT+0300 (Eastern European Summer Time)
//Good Evening, SuperDuperPCsasa