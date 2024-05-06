const express= require('express')
const socketIo=require('socket.io')
const helmet=require('helmet')
const app=express()

app.use(express.static(__dirname + '/public'))
app.use(helmet())

const expressApp=app.listen(8080)

io=socketIo(expressApp)

console.log('Listening on port 8080');
module.exports={
    app,
    io
}