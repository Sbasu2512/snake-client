const web = require('./client');

const connect = web();  

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};
//Send the string "Move: up" as data to the server via the conn object.
// stdin.on("data", handleUserInput);
// connect.on('connect',()=>{
  
//   // connect.write("move: up");
//   // connect.write("move: left");
//   // connect.write("move: down");
//   // connect.write("move: right");
// })

const handleUserInput = function(key) {
  //connect.write("name: SB"); 
  connect.write("Name: SB");
  if (key === '\u0003') {
    process.exit();
  }else if(key === '\u0077'){
    connect.write("Move: up");
    console.log("W");
  }else if(key === '\u0073'){
    connect.write("Move: down");
    console.log("S")
  }else if(key === '\u0061'){
    connect.write("Move: left");
    console.log("A")
  }else if(key === '\u0064'){
    connect.write("Move: right");
    console.log("D")
  }
}

setupInput()



