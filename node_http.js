const http = require('http');
//require('http') is a node.js module that allow us to send, transfer, and get data over http
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello world ');
        res.write("This is our first server");
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
});
server.listen(3000);
console.log("listening on port 3000...");