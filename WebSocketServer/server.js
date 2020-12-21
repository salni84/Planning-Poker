const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const webSocketServer = new WebSocket.Server({ server })

webSocketServer.on('connection', function connection(webSocketClient) {
    webSocketClient.on('message', function incoming(data) {
        webSocketServer.clients.forEach(function each(client) {
            if (client !== webSocketClient && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
})

server.listen(port, function() {
    console.log(`Server is listening on ${port}!`)
})
