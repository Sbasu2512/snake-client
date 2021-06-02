const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function(key) {
  //connect.write("name: SB"); 
  connect.write("Name: SB");
  if (key === '\u0003') {
    process.exit();
  }else if(key === '\u0077' || key === '\u2191'){
    connect.write("Move: up");
    console.log("W");
  }else if(key === '\u0073' || key === '\u2193'){
    connect.write("Move: down");
    console.log("S")
  }else if(key === '\u0061' || key === '\u2190'){
    connect.write("Move: left");
    console.log("A")
  }else if(key === '\u0064' || key === '\u2192'){
    connect.write("Move: right");
    console.log("D")
  }
}

module.exports = setupInput ;