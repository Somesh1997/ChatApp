//npm init -y
//npm install express
//npm install socket.io
//npm install nodemon
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http); // Socket IO Enabled Hota Hai Isase 
const userDB=[];
// When a socket connect to app.js 
io.on('connection', function(socket) {
  console.log(`${socket.id}user connected`);
  socket.on("message-send",function(msg){
   let id=socket.id;
   let name;
   for(let i=0;i<userDB.length;i++)
   {
      if(userDB[i].id==id)
       {
            name=userDB[i].name;
            break;        
       }
   }
   
    socket.broadcast.emit('receive-msg',{name:name,message:msg});
  });
  socket.on("new-user-connected",function(name){
      let obj={id:socket.id,name:name};
      userDB.push(obj);
      socket.broadcast.emit("new-user",name);
  });
  socket.on("disconnect",function(){
    let id=socket.id;
    let name;
    let idx;
    for(let i=0;i<userDB.length;i++)
    {
       if(userDB[i].id==id)
        {
             idx=i;
             name=userDB[i].name;
             break;        
        }
    }
    //splice function (idx , count of elements to delete );
    userDB.splice(idx,1);
     socket.broadcast.emit('leave-chat',name);
  })
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

