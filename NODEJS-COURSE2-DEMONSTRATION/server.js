const { error } = require('console');
const http = require('http');
const PORT = 5000;

const server = http.createServer((request, response)=>{
    response.writeHead(200,{
        "content-type" : "text/plain"
    })

    response.end('Hello!')
});

server.listen(PORT, () =>{
    console.log('Server is ready and running', PORT);
});

server.on('error', (error) => {
    if (error.code == 'EADRINUSE'){
        console.log('The port is already in use');
    }
});