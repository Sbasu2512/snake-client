const web = require('./client');

const connect = web();  

connect.on('connect',()=>{
  connect.write("SB");
})
connect.on('data',(c)=>{
  c.write("move: up");
})

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};




