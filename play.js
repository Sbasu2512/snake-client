const web = require('./client');

const connect = web();  

connect.on('connect',()=>{
  connect.write("Name: SB");
})






