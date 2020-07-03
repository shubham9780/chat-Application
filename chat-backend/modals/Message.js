const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
    chatroom:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Chatroom is require",
        ref:"chatroom",
    },
    user:{
type:mongoose.Schema.Types.ObjectId,
required:"User is requires",
ref:"User",
    },
    message:{
        type:String,
        required:"message is require"
    }
    }
);

module.exports = mongoose.model("Message",messageSchema);