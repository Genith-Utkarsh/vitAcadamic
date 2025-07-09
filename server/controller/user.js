import User from "../model/user.js"
import bcrypt from "bcryptjs"
import { createToken } from "../auth/auth.js"
import { Sendmail } from "../lib/emailtample.js"
export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body
    const finduser = await User.findOne({ email })
    if (finduser) {
      res.json({
        success: false,
        message: "user is already exist!"
      })
    }
    else {
      const haspasss = await bcrypt.hash(password, 10)
      const userDatas = await User.create({
        email,
        password: haspasss,
        name
      })
      const token = createToken(userDatas)
        await Sendmail(email)
           
    console.log(data)
      res.cookie("userToken", token, {
        httpOnly: true,       // Prevents client-side JavaScript from accessing the cookie
        secure: true,         // Ensures cookie is sent only over HTTPS
        sameSite: "none",
      }).json({
        success: true,
        message: "Account Created Successfully!",
        userData: userDatas
      })
    }

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userdatas = await User.findOne({ email });

    if (!userdatas) {
      return res.json({
        success: false,
        message: "User Not Found!",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, userdatas.password);

    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Password is Incorrect",
      });
    }

    const token = createToken(userdatas)
    return res.cookie("userToken", token, {
      httpOnly: true,       // Prevents client-side JavaScript from accessing the cookie
      secure: true,         // Ensures cookie is sent only over HTTPS
      sameSite: "none",
    }).json({
      success: true,
      message: "User Login Successful!",
      userData: userdatas,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
export const checkauth = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }

    const userId = req.user._id;
    const userDatas = await User.findById(userId).select("-password");

    res.json({
      success: true,
      userData: userDatas,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};


export const Logout = async(req,res)=>{
  try {
    res.clearCookie("userToken").json({
      success:true,
      message:"user Logout SuccessFull!"
    })
  } catch (error) {
    res.json({
      success:false,
      message:"isuue for Logout"
    })
  }
}