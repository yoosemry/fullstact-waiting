
import interviewModel from "../model/interviewModel.js";

export const readInterview = async(req,res)=>{

    try {
        const data  = await interviewModel.find({action : false});
        res.status(200).send({status : true, data : data})
        
    } catch (error) {
        console.log('error' , error);
        res.status(401).send({status: false , message : "unknw error"})
    }
}
export const compeleteInterview = async(req,res)=>{

    try {
        const data  = await interviewModel.find({action : true});
        res.status(200).send({status : true, data : data})
        
    } catch (error) {
        console.log('error' , error);
        res.status(401).send({status: false , message : "unknw error"})
    }
}


export const addInterview = async (req,res) =>{

    

    try {

       const newInterview = new interviewModel({...req.body});
       await newInterview.save();

       res.status(200).send({status: true, message : "added new person"})

        
    } catch (error) {
        console.log('new person  added error', error);
        res.status(401).send({status : false, message : "unknown error from new person"})
    }

}


export const updateIntervew = async (req, res)=>{
    const {id} = req.params ;

    const findquery = await  interviewModel.findById(id)
    if(!findquery) return res.status(404).send({status : false , message : 'not found'})
    
     await interviewModel.findByIdAndUpdate(id, {...req.body});
     res.status(200).send({status : true, message : 'updated'})
}