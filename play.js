const web = require('./client');

const connect = web();  

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// stdin.on("data", handleUserInput);

// const handleUserInput = function(data) {
//   process.stdin.on('data', (key) => {
//     if(key.includes("move up")){

//     }else if(key.includes("move down")){

//     }else if(key.includes("move left")){

//     }else if(key.includes("move right")){

//     }
//   });
// }



