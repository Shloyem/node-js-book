const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// pooling - creating a few connections, putting them aside until called upon
// createPool is like createConnection, just that we need to specify how many connections to set aside
// Working this way 'pool' needs to be saved, for thats how we connect.
// Standard is to have pool or connection in another module, and ask it with a designated Get
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

pool.query('SELECT * FROM `city`', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
  console.log(fields);
});
