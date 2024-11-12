import { io } from "socket.io-client";

const SOCKET_SERVER_URL = 'http://localhost:9092';

export const socket = io(SOCKET_SERVER_URL, {
    transports: ['websocket'], // Use websocket as the transport protocol
  });
 // const socket = io('http://localhost:9092', {
      //   transports: ['websocket'], // Use websocket as the transport protocol
       
      // });