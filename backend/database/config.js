import sequelize from "sequelize";

const db = new sequelize('login_db', 'root', '', {
     host: 'localhost',
     dialect: 'mysql'
})
export default db;