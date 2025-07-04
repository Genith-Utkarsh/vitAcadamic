import { validUser } from "../auth/auth.js"

export const Auth = (cookieName) => {
  return (req, res, next) => {
    const token = req.cookies[cookieName];
    if (!token) {
      return next();
    }

    try {
      const payload = validUser(token);
      req.user = payload;
    } catch (err) {
      console.error("Invalid token:", err.message);
    }

    return next(); // ✅ Ensure the request continues
  };
};
