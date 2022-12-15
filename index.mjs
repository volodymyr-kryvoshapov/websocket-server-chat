import WebSocket, { WebSocketServer } from 'ws';

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
  console.log("New client connected");

  ws.on('message', function message(data, isBinary) {
    console.log(`Client has sent us: ${data}`)

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.on("close", () => {
    console.log("The client has disconnected");
  });

  ws.onerror = function () {
    console.log("Some Error occurred")
  }
});

console.log(`The WebSocket server is running on url: ws://localhost:${PORT}`);
