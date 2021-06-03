const net = require("net");
const { IP, PORT, char } = require("./constants");
const web = function () {
  const stdin = process.stdin;
  stdin.setEncoding("utf-8");
  //const initials = "SB";
  const connect = net.createConnection(
    {
      host:IP,
      port: PORT,
    },()=>{
      console.log("connection created....");
    });
    connect.setEncoding(char);
    connect.on('connect', (error) => {
      console.log("connected to server");
      if(error){
        console.log("error:",error);
        
      }
   });
    connect.on('data', (data) => {
      console.log('Server says: ', data);
   });
//event handler. event name: data. socket methods will refer to client side
    return connect; //
}

module.exports = web;