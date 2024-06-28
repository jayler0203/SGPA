import { Sequelize}from "sequelize"
const database =process.env.MYSQL_DB as string
const userName =process.env.MYSQL_USER as string
const password =process.env.MYSQL_PASSWORD as string
const host =process.env.MYSQL_HOST as string
const port =Number(process.env.MYSQL_PORT as string) 
export const sequelize = new Sequelize(database, userName, password, {host,port,dialect:"mysql"})
export const dbConnectMySql = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Mysql Conexion correcta');

    } catch (error) {
        console.log("Mysql connection error", error);
        
    }
}