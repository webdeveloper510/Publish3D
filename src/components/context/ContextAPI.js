import React, { useState } from "react";

export const contextObject=React.createContext();

const ContextProvider=(props)=>{
    const [isToken,setisToken]=useState(!!localStorage.getItem('Token'));

    const ctxVal={
        isToken,
        setisToken
    }
    return(
        <contextObject.Provider value={ctxVal}>{props.children}</contextObject.Provider>
    )
}

export default ContextProvider

