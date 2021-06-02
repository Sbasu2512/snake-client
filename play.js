const net = require("net");

const web = function () {
  net.createConnection(
    {
      host:'135.23.222.131',
      port: 50542
    });
  
    web.setEncoding("utf-8");

    return web;
}