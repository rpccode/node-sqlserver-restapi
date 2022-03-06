import sql from 'mssql';
import config from '../config';

const dbSetting = {
        user: config.user,
        password: config.password,
        server: config.server,
        database: config.database,
        options: {
            encrypt: true, // for azure
            trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
}


const getConnection = async () =>{
    try {
        const pool = await sql.connect(dbSetting);
        return pool;
    } catch (error) {
            console.log(error)
    }
}



export {
    getConnection,
    sql
}