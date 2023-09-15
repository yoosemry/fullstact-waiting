import mongoose from "mongoose";
import { DB_URL } from "./config.js";

const connectDB = async ()=>{

    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )

        console.log('db connection success');
        
    } catch (error) {
        console.log('db connection error' , error);
        process.exit(1)
    }

}


export default connectDB