import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Db_couse')
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}



