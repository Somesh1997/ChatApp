
const chatBox=document.querySelector(".chat-box");
let messageInput=document.querySelector("#chat");
const send=document.querySelector(".chat-send");
const name=prompt("Enter Your Name : ");
//console.log(name);
socket.emit("new-user-connected",name);
send.addEventListener("click",function(){
     console.log("Click Button Clicked ");
    let msg=messageInput.value;
    if(msg){
    let chatItem=document.createElement("div");
    chatItem.classList.add("chat-Item");
    chatItem.classList.add("right");
    chatItem.innerHTML=msg;
    chatBox.appendChild(chatItem);
    messageInput.value="";
    chatBox.scrollTop=chatBox.scrollHeight;  
    socket.emit("message-send",msg);
}
})