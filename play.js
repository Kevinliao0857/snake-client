const { connect } = require('./client');
console.log('Connecting ...');
connect();



const setupInput = () => {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on(handleUserInput);

  return stdin;
}

const handleUserInput = (key) => {
  if(key === '\u0003') {
    process.exit();
  }
};

console.log('after callback');
