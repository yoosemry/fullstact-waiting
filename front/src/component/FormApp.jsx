import axios from 'axios';
import React, { useState } from 'react'

const FormApp = () => {

    const [name , setMyname]= useState('');
    const [load , setLoad] =  useState(false)
    const submithandle = async(e)=>{
        e.preventDefault();
    
        const obj = {
          name,
          action : false
        }
    
      try {
        setLoad(true);
        const {data} =  await axios.post('http://localhost:5000/api/interview/',obj)
        console.log(data.message);
          alert(data.message);
    
        setMyname('');
        setLoad(false)
      } catch (error) {
        console.log('error' , error)
        setLoad(false)
      }
    
      }
    
      if(load) return<><h1 className='center'>please Wait</h1></>

  return (
    <div className="input-container">
    <form  onSubmit={submithandle}>

    <input type="text" placeholder='name'
    onChange={(e)=>{
      setMyname(e.target.value);
    }}
    value={name}
    />

    <input type="submit" className='btn' value='save' />
    </form>
    


  </div>
  )
}

export default FormApp