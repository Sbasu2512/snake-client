const connect = require("./client.js");
//const  setupInput = require("./input.js");
const con = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function(key) {
  //con.write("name: SB"); 
  
  con.write("Name: SB");
  if (key === '\u0003') {
    process.exit();
  }else if(key === '\u0077' || key === '\u2191'){
    con.write("Move: up");
    console.log("Up");
  }else if(key === '\u0073' || key === '\u2193'){
    con.write("Move: down");
    console.log("Down");
  }else if(key === '\u0061' || key === '\u2190'){
    con.write("Move: left");
    console.log("Left");
  }else if(key === '\u0064' || key === '\u2192'){
    con.write("Move: right");
    console.log("Right");
  }
}


setupInput();