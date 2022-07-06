import sequelize from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const db = new sequelize(process.env.MYSQLDB_DATABASE, process.env.MYSQLDB_USER, process.env.MYSQLDB_USER_PASSWORD, {
     host: process.env.DB_HOST,
     dialect: 'mysql'
})
export default db;