//const { connect } = require("http2");
const net = require("net");

const web = function () {
  const connect = net.createConnection(
    {
      host:'135.23.222.131',
      port: 50542
    });
  
    connect.setEncoding("utf-8");

    return web;
}

console.log("connecting....");
web();