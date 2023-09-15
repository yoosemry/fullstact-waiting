import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useShop } from './contantApi';

const DisplayData = () => {
    
  const [complete , setComplete] = useState('');

  useEffect(()=>{

    const fetchdata = async()=>{

      try {

          const {data} = await axios.get('http://localhost:5000/api/interview/complete');
          setComplete(data.data);

        console.log(data.data)

      } catch (error) {
        console.log(error);
      }

    }

    fetchdata();


 
  },[complete])
  

 
   
  return (
    <>
    {
      complete && complete.map((items , index)=>{
            return(
                <div className='flex'>

      
        
                <p key={items._id}>{items.name}</p>
                  <button onClick={ async()=>{
                      
                      
                      try {
                          const {data} =  await axios.put(`http://localhost:5000/api/interview/${items._id}`,{action : false})
                          console.log(data.message);
                          alert('deleted');
                          
                          
                        } catch (error) {
                            console.log('error' , error)
                        }
                        
                    }}>Delete</button>
                  </div>
            )
        })
    }

        </>
  )
}

export default DisplayData