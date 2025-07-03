import React, { createContext, useState,useContext } from "react";
import axios from "axios"
const Authlogincontext = createContext(null);
export const useAuth = ()=>{
    return useContext(Authlogincontext)
};
export const AuthContextProvider = ({ children }) => {
    const [showUserLogin,setshowUserLogin] = useState(false)
    const [feedbackon,setfeedbackon] = useState(false)
    const baseUrl = import.meta.env.VITE_SERVER_URL
    axios.defaults.baseURL = baseUrl
    axios.defaults.withCredentials = true
    const value = {
        showUserLogin,
        setshowUserLogin,
        feedbackon,
        setfeedbackon,
        axios
    }
  return (
    <Authlogincontext.Provider value={value}>
      {children}
    </Authlogincontext.Provider>
  );
};


