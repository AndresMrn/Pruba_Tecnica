import mongoose from "mongoose";

const messageShema = new mongoose.Schema({
    id : {
        type : String
    },

    content : {
        type : String,
        required : true
    }, 
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    }   
}, {
    timestamps : true
});

export default mongoose.model('Message', messageShema)