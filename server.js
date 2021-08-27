const http = require("http");
const host = '127.0.0.1'
const port = 4000
const fs = require("fs");

const server = http.createServer((req,res) =>
{
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('./archivos/index.html',(error,data) => {
        if(error){
            res.writeHead(404)
            res.write("Archivo No Encontrado")
        } else {
            res.write(data)
        }

    })
    res.end()
})

server.listen(port,host,() => {
    console.log("Servidor Funcionando en el Puerto: ", host, port)
    
})
