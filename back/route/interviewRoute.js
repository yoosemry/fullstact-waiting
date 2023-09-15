import express from 'express';
import {  addInterview, compeleteInterview, readInterview, updateIntervew } from '../control/interviewControler.js';

const interview = express.Router();

interview.route('/')
.get(readInterview)
.post(addInterview);

interview.get('/complete' , compeleteInterview);
interview.put('/:id' , updateIntervew);



export default interview