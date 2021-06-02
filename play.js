const { connect } = require("http2");
const net = require("net");

const web = function () {
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
    
}







console.log("connecting....");
web();