import jwt from "jsonwebtoken";

const secretKey = "kiran@9009";

export const createToken = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    name: user.name
  };

  const token = jwt.sign(payload, secretKey, {
    expiresIn: "7d" // Optional: expires in 7 days
  });

  return token;
};


export const validUser = (token) =>{
const payloads = jwt.verify(token,secretKey)
return payloads
} 