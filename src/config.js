import { config } from "dotenv"
config();

export default{
        port: process.env.PORT || 4000,
        user:process.env.DB_USER || '',
        password:process.env.DB_PASSWORD || '',
        server:process.env.DB_SERVER || '',
        database:process.env.DATABASE || ''




}