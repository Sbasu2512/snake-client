let con ;

const setupInput = function (result) {
  con = result ;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  stdin.on("data", messages);
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
//con.write(`Say: ${input}`);
const messages = (key) => {
  //sending messages! //num 1 key
  if (key === "\u0031") {
    //1
    con.write(`Say: HEY`);
    //num 2 
  } else if (key === "\u0032") {
    con.write("Say: wyd");
    //num 3
  } else if (key === "\u0033") {
    con.write("Say: bye");
  }
};

module.exports = setupInput ;