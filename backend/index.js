import express from "express"
import db from "./database/config.js";
import router from "./route/UserRoute.js";
import { semua } from "./controller/AllController.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

try {
     await db.authenticate();
     console.log('Database Connected');
     // await Pesan.sync();//Pembuatan Table Dengan Sequalize
} catch (error) {
     console.log(error.message);
}
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); //Akses Cors ke frontend
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(semua);


app.listen(5000, () => console.log("Server Runing Port 5000"));