const net = require("net");
const web = function () {
  const stdin = process.stdin;
  const initials = "SB";
  const connect = net.createConnection(
    {
      host:'135.23.222.131',
      port: 50542,
    },()=>{
      console.log("connection created....");
    });
    connect.setEncoding("utf-8");
//event handler. event name: data. socket methods will refer to client side
    connect.on('data', (data) => {
      console.log('Server says: ', data);
    });

    connect.on('connect',()=>{
      connect.write("name: SB");
      connect.write("move: up");
      connect.write("move: down");
      connect.write("move: left");
      connect.write("move: right");
    })
    

    stdin.on('data', (whatYouTyped) => {
      connect.write(`${initials} ${whatYouTyped}`);
    })
    return connect; //
}

module.exports = web;