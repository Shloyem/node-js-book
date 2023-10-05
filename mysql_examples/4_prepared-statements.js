// Prepared statements - to prevent SQL injections
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const cityId = 30;
pool.query('SELECT * FROM `city` WHERE id = ?', [cityId],
  (error, results) => {
    if (error) reject(error);
    console.log(results);
  });

pool.query('SELECT * FROM `city` WHERE Name = ? AND CountryCode = ?', ['Buenos Aires', 'ARG'],
  (error, results) => {
    if (error) reject(error);
    console.log(results);
  });