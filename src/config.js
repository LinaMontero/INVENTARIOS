import {config} from "dotenv"

config();

export default {
    host : process.env.HOST, /**traete el valor de host, para poderlo leer desde afuera del archivo .env se usa process.env */
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD
}