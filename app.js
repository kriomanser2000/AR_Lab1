const http = require("http");
http.createServer(function(reuqest, response)
{
    response.end("Hell Node11!");
}).listen(3000, "127.0.0.1", function()
{
    console.log("Server started in port 3000.");
});