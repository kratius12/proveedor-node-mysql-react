import { createPool } from "mysql2";

export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'constru-tech'
})