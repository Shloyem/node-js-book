const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');

  connection.query('SELECT * FROM `city`', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    console.log(fields);
    connection.destroy();
  });
});

