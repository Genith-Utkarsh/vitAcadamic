import React, { createContext, useState,useContext,useEffect } from "react";
import axios from "axios"
import toast from "react-hot-toast";
const Authlogincontext = createContext(null);
export const useAuth = ()=>{
    return useContext(Authlogincontext)
};
export const AuthContextProvider = ({ children }) => {
    const [showUserLogin,setshowUserLogin] = useState(false)
    const [feedbackon,setfeedbackon] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const [userdata,setuserData] = useState()
    const baseUrl = import.meta.env.VITE_SERVER_URL
    axios.defaults.baseURL = baseUrl
    axios.defaults.withCredentials = true
    const checkauths = async () => {
  try {
    const { data } = await axios.get("/api/checkauth", { withCredentials: true }); // ✅ include this
    if (data.success) {
      setuserData(data.userData); 
    }
  } catch (error) {
    console.log("Auth check failed:", error);
  }
};
const logout = async()=>{
 try {
  const {data} = await axios.get("/api/Logout")
  if(data.success){
    toast.success(data.message)
    setuserData(null)
  }
  else{
    toast.error(data.message)
  }
 } catch (error) {
  console.log(error)
 }
}
useEffect(() => {
  checkauths();
}, []);

    const value = {
        showUserLogin,
        setshowUserLogin,
        feedbackon,
        setfeedbackon,
        axios,
        menuOpen,
        setMenuOpen,
        setuserData,
        userdata,
        logout
    }
  return (
    <Authlogincontext.Provider value={value}>
      {children}
    </Authlogincontext.Provider>
  );
};


