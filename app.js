import express from "express";
import route from "./router/route.js";

 const app = express();
 const PORT = process.env.PORT|| '3000';
 app.use(express.json())

app.use(route)

 app.listen(PORT , ()=>{
    console.log(`server run on http://localhost:${PORT}`);
 })