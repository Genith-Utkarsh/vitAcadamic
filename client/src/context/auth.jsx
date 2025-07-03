import React, { createContext, useState,useContext } from "react";

const Authlogincontext = createContext(null);
export const useAuth = ()=>{
    return useContext(Authlogincontext)
};
export const AuthContextProvider = ({ children }) => {
    const [showUserLogin,setshowUserLogin] = useState(false)
    const [feedbackon,setfeedbackon] = useState(false)
    const value = {
        showUserLogin,
        setshowUserLogin,
        feedbackon,
        setfeedbackon
    }
  return (
    <Authlogincontext.Provider value={value}>
      {children}
    </Authlogincontext.Provider>
  );
};


