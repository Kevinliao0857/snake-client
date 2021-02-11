Move_Keys = {

  w: "up",
  a: "left",
  s: "down",
  d: "right"

},

Talk_Keys = {

  y: "YOOOoooLooooo",
  u: "Eat My Dust",
  t: "LuLuLuLuLul",
  i: "Howdy"

}


let connection;
const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

}

const handleUserInput = (key) => {
  if(key === '\u0003') {
    process.exit();
  } else if (Move_Keys[key]) {
    connection.write(`Move: ${Move_Keys[key]}`)
  } else if (Talk_Keys[key]) {
    connection.write(`Say: ${Talk_Keys[key]}`)
  };

};




module.exports = {setupInput}