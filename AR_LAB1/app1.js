const http = require("http");
const server = http.createServer((request, response) =>
{
    const url = request.url.toLowerCase();
    switch(url) 
    {
        case "/":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Hello, world!");
            break;
        case "/about":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("About page");
            break;
        default:
            notFound(response);
            break;
    }
});
function notFound(response)
{
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain");
    response.end("Not found");
}
const PORT = 3000;
const HOST = "localhost";
server.listen(PORT, HOST,() =>
{
    console.log(`Server running on http://${HOST}:${PORT}`);
});