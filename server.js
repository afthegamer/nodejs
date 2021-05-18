const http = require("http");
const fs = require("fs");
let path = "./views/";
const server = http.createServer((request, response) => {
    console.log(request.url, request.method);
    response.setHeader("Content-Type", "text/html");
    switch (request.url) {
        case "/":
            
            path += "home.html";
            response.statusCode = 200;
            // response.end();
            
            break;
        case "/about":
            path += "about.html";
            response.statusCode = 200;
            // response.end();
            break;
        default:
            response.statusCode = 404;
            path += "404.html";
            // response.end();
            break;
    }
    fs.readFile(path, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                response.write(data.toString());
                response.statusCode = 200;
            }
            response.end();
        });
    
});

server.listen(3002, "localhost", () => {
    console.log("Listening on port 3002");
});