const mongoose =require("mongoose");
const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async (req,res,next)=>{
const{name} =req.body;

const nameRegex =/[A-Za-z\s]+$/;

if(!nameRegex.test(name)) throw "Chatroom name can contain only alphabets";

const chatroomExists = chatroom.findone({name});

if(chatroomExists) throw "Chatroom with this name already exist";

const chatroom =new Chatroom({
    name,
});

await chatroom.save();

req.json({
    message:"Chatroom created",
});
}