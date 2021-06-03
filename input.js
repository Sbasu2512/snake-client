const { char, exit, w, a, s, d, up, down, left, right, hey, yolo, bye, wyd, brb } = require("./constants");
let con ;

const setupInput = function (result) {
  con = result ;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(char);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  //con.write("name: SB"); 
  con.write("Name: SB");
  if (key === exit) {
    process.exit();
  }else if(key === w || key === up){
    con.write("Move: up");
    console.log("Up");
  }else if(key === s || key === down){
    con.write("Move: down");
    console.log("Down");
  }else if(key === a || key === left){
    con.write("Move: left");
    console.log("Left");
  }else if(key === d || key === right){
    con.write("Move: right");
    console.log("Right");
  }

  if(key === hey){
    con.write("Say: hey");
    console.log("hey");
  }else if(key === yolo){
    con.write("Say: YOL");
    console.log("YOLO");
  }else if(key === brb){
    con.write("Say: brb");
    console.log("BRB");
  }else if(key === bye){
    con.write("Say: bye");
    console.log("BYE");
  }else if(key === wyd){
    con.write("Say: wyd");
    console.log("WYD");
  }
  
}
//con.write(`Say: ${input}`);

module.exports = setupInput ;