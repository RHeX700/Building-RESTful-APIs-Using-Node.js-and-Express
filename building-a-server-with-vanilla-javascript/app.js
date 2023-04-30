const { error } = require('console');
const http = require('http');
const todos = require('./todos');
const getRequestData = require('./utils');
const PORT = 5000;

const server = http.createServer(async (request, response)=>{
    if(request.url =='/app/v1/todos' && request.method == 'GET'){
        console.log('GET request received @ /app/v1/todos');
        response.writeHead(200, {
            'content-type' : 'application/json'
        });

        response.end(JSON.stringify(todos));
    }
    else if(request.url == '/app/v1/todos' && request.method == 'POST'){
        console.log('POST request received @ /app/v1/todos');
        let req_body = await getRequestData(request);
        todos.push(JSON.parse(req_body));

        response.writeHead(201, {
            'content-type' : 'application/json'
        });
        response.end(JSON.stringify(JSON.parse(req_body)));

    }
    // console.log(request.url);
    // console.log(request.url.match('\/app\/v1\/todos\/([0-9])'));

    else if(request.url.match('\/app\/v1\/todos\/([0-9])') && request.method == 'DELETE'){
        console.log('DELETE request received @ /app/v1/todos');
        id = request.url.split('/')[4];
        const todo = todos.find(t => t.id === parseInt(id));

        if(!todo){
            response.writeHead(404, {
                "content-type" : "application/json"
            });

            response.end('No todo with specified id available');
        }else{
            const index = todos.indexOf(todo);
            todos.splice(index, 1);
            response.writeHead(200, {
                "content-type" : "application/json"
            });
            response.end('Deleted the specified todo');

        }
    }


});

server.listen(PORT, () =>{
    console.log('Server is ready and running', PORT);
});

server.on('error', (error) => {
    if (error.code == 'EADRINUSE'){
        console.log('The port is already in use');
    }
});