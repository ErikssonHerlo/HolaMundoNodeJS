const http = require("http");
const host = '127.0.0.1'
const port = 4000
const fs = require("fs");

const server = http.createServer((req,res) =>
{
    res.writeHead(200, {'Content-Type': 'text/plane'})
    res.write("Hola desde el Servidor")
    res.end()
})

server.listen(port,host,() => {
    console.log("Servidor Funcionando en el Puerto: ", host, port)
    
})
