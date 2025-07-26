import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbConnection } from "./config/db.js";
import userRoutes from "./Routes/user.js";
import { Auth } from "./middleware/user.js";
import suggroutes from "./Routes/suges.js";
import cors from "cors";

dotenv.config();

// ✅ Set CORS before other middlewares
const allowedOrigins = [
  "https://vitacademic.info",
  "http://localhost:5173"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Apply Auth AFTER CORS is set
app.use(Auth("userToken"));

const PORT = process.env.PORT || 6010;

dbConnection(process.env.MONGODB)
  .then(() => {
    console.log("Mongodb is Connected");
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

app.get("/api/user", (req, res) => {
  res.json({
    userdata: req.user,
  });
});

app.use("/api", userRoutes);
app.use("/api", suggroutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
