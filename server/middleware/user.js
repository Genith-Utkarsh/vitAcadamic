import { validUser } from "../auth/auth.js"
export const Auth = (cookieName)=>{
 return(req,res,next)=>{
    const token  = req.cookies[cookieName]
    if(!token){
      return next()
    }

    const payload = validUser(token)
    req.user = payload
 }
}