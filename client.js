const net = require("net");
const web = function () {
  const stdin = process.stdin;
  //const name = "Sayantan Basu";
  const initials = "SB";
  const connect = net.createConnection(
    {
      host:'135.23.222.131',
      port: 50542
    },()=>{
      console.log("connection created....");
    });
  
    connect.setEncoding("utf-8");
//event handler. event name: data. socket methods will refer to client side
    connect.on('data', (data) => {
      console.log('Server says: ', data);
    });
    
    stdin.on('data',(input)=>{
      client.write(`${initials} : ${input}`);
    })
}

console.log("Establishing connection to server");
web();
console.log("Connection Established");

module.exports = web;