const mongoose=require("mongoose");

const chatroomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"Na is require"
    },
    }
);

module.exports = mongoose.model("Chatroom",chatroomSchema);