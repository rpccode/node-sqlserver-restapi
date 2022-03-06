import config  from "./config";
import express  from "express";
import productsRouter from "./routers/productRouter";
import morgan from "morgan";

const app =  express();



//setting
app.set('port', config.port );


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(productsRouter);

export default app;