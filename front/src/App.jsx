import React, { useEffect } from 'react'

import axios from 'axios'
import FormApp from './component/FormApp';
import DisplayData from './component/DisplayData';
import { useShop } from './component/contantApi';
import Waiting from './component/Waiting';

const App = () => {

 
  

  // useEffect(()=>{

  //   const fetchdata = async()=>{

  //     try {

  //         const {data} = await axios.get('http://localhost:5000/api/interview/');
  //         setData(data.data);

  //         console.log(data)

  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }

  //   fetchdata();


 
  // },[])


  

 
  
  return (
    <div className='container bg-black mx-auto'>

    <FormApp />
    <br /><br />

      <div className="display">
      <h1>interview waiting</h1>
    
          
       <Waiting/>
       <br /><br />
       <h1>Complete interview</h1>
       <DisplayData /><br /><br /><br />


           </div>
 


    </div>
  )
}

export default App