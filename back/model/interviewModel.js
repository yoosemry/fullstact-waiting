import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    
        action: {
            type: Boolean,
            required: true,
        },
       

    },
    {
        timestamps : true
    }

   
)


const interviewModel =  mongoose.model('interview' , interviewSchema);
export default interviewModel;

