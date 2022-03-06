import config  from "./config";

import express  from "express";
import productsRouter from "./routers/productRouter";

const app =  express();



//setting
app.set('port', config.port );

//middleweres
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(productsRouter);

export default app;