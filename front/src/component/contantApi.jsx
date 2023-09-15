import { createContext, useContext, useState } from "react";

const ContantApi = createContext();

export const Globalprovider = ({children}) =>{


    const [mydata , setData]= useState('');
    const [complete , setComplete]= useState('');
    
    

    const value ={
        mydata,
        setData,
        complete,
        setComplete
    }



    return(
        <ContantApi.Provider value={value}>
        {children}
        </ContantApi.Provider>
    )
}

export const useShop = ()=>{ 

    return useContext(ContantApi);
}

