//Crear web server
const http = require('http');
const fs = require('fs');
const path = require('path');

//Creo el servidor
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.json');
    const file = fs.readFileSync(filePath);
    const comments = JSON.parse(file);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
});

//Levanto el servidor
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});