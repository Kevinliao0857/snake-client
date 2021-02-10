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

//  setTimeout(() => {
//    conn.on("connect", () => {
//     conn.write("Move: up")
//     });
//  }, 50)




  conn.on("connect", (data) => {
  console.log("Server says: ", data);  
  });
  
 


  return conn;
}

module.exports = {connect}