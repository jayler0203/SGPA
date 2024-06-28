import express from "express";
import { Request, Response } from "express";
import "dotenv/config";
import path from 'path';
import cors from "cors";
import { router } from "./routes/index";
import{dbConnectMySql} from "./config/mysql"
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
dbConnectMySql()
app.get("/", (req: Request, res: Response) => {
  res.render("home")
});
const PORT = process.env.PORT||3000;
app.listen(PORT, () => console.log(`CORRIENDO EN EL PUERTO: ${PORT}`));
