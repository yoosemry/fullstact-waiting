import path from 'path'
import  Express, { json }  from "express";
import cors from 'cors'
import chalk from 'chalk';
import { PORT } from "./config/config.js";
import interview from "./route/interviewRoute.js";
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser'

const app  = Express();

const port = PORT;


app.use(cors())
app.use(json())
app.use(cookieParser());
app.use('/api/interview' , interview)

if(process.env.NODE_ENV === 'production'){
    const __dirname = path.resolve();
 
    app.use(Express.static(path.join(__dirname , 'front/dist')));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'front', 'dist', 'index.html'))
  
});

}else{
    app.get("api/", (req,res)=>{
        res.send("api running ");
    })

}

connectDB();

app.listen(port, ()=>{

    console.log(`${chalk.green.bold('Server')} is connected at Port ${chalk.blue.italic(port)}`);

});