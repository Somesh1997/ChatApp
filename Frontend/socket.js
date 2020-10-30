socket.on("receive-msg",function(obj){
    let chatItem=document.createElement("div");
    chatItem.classList.add("chat-Item");
    chatItem.classList.add("left");
    chatItem.innerHTML=`<b>${obj.name}</b> : ${obj.message}`;
  
    chatBox.appendChild(chatItem); 
    chatBox.scrollTop=chatBox.scrollHeight;  
})
socket.on("new-user",function(name)
{
let chatItem=document.createElement("div");
chatItem.classList.add("join");
chatItem.innerHTML=`${name} Joined Chat`;

chatBox.appendChild(chatItem);
chatBox.scrollTop=chatBox.scrollHeight;
})
socket.on("leave-chat",function(name){
    let chatItem=document.createElement("div");
    chatItem.classList.add("leave");
    if(name==null)
    {
        name="Unknown";
    }
    chatItem.innerHTML=`${name} Leave the Chat`;
    
    chatBox.appendChild(chatItem);
    chatBox.scrollTop=chatBox.scrollHeight;
})