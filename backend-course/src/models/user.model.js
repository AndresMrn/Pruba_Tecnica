import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    name_estudent : {
        type : String,
        requited : true,
    },

    username :{
        type : String,
        required : true,
        trim : true,
        unique : true,
    }, 
    email : {
        type: String,
        required : true,
        unique : true
    } ,
    password : {
        type : String,
        required : true,
        trim : true
    },
    role : {
        type : String
    }
}, {
    timestamps : true
})

export default mongoose.model('User', userSchema)