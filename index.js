require('dotenv').config()
const path = require('path')
// console.log('Rick Rules');
console.log(process.argv[2]);
// console.log(process.argv[3]);
console.log(process.env.USER)
// console.log(process.env.FOO);


const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(
    path.join(__dirname, 'client/build')
    ))
server.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'client/build', 'index.html')
    )
})

    server.get('/api/users', (req, res) =>{
        res.send('<h1>Hello There!</h2>')
    })

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Listening on PORT:', port);
});
