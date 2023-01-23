# websocket-server-chat
Simple websocket server chat application. 

When this server accept message from any client it send it back to all connected clients 
including that client who send a message.

## Requirements:

- node >= 16.0.0
- npm >= 8.0.0

## Install:

`npm install`

## Run:

`npm run start`

## Use this URL in order to connect to the server from your client application:

```javascript
const ws = new WebSocket('ws://localhost:8080');
```

If 8080 port is busy you can change it by changing constant in file `./index.mjs`

```javascript
const PORT = 8080;
```

