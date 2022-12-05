const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());


app.get("/", (req, res) => {
    res.json({"users": ["Luis", "Abreu"]})
})

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log('User Connect ', socket.id)

    socket.on("Send_message", (data) => {
        socket.broadcast.emit("receive_message", data)
    })

    socket.on("disconnect", () => {
        console.log("user Disconnected", socket.id)
    })
})

server.listen(5000, () => {
    console.log('Server is running!');
});