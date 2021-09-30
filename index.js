require('dotenv').config()
console.log('Rick Rules');
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.env.USER)


const express = require('express')

const server = express()

server.use(express.json())

const port = process.env.PORT;
server.listen(port, () => {
    console.log('Listening on PORT:', port);
})

server.get('/hello', (req, res) =>{
    res.send('<h1>Hello There!</h2>')
})