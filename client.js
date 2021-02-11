const { TIMEOUT } = require('dns');
const net = require('net');
// const { connected } = require('process');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: "50542"
  });

  conn.setEncoding('utf8'); 
  

  
  
  conn.on("connect", () => {
  conn.write("Name: KMS");
  console.log("Successfully connected to game server")
  });


  // conn.on("Move", () => {
  // conn.write("Move: up")
  // });

  // conn.on("Move", () => {
  // conn.write("Move: down")
  // });

  // conn.on("Move", () => {
  // conn.write("Move: left")
  // });

  // conn.on("Move", () => {
  // conn.write("Move: right")
  // });

  // conn.on("connect", (data) => {
  // console.log("Server says: ", data);  
  // });
  
 


  return conn;
}

module.exports = {connect}