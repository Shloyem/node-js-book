// Example to work with promises and not callbacks
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

function CreateQuery(pool) {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM `city`', (error, results, fields) => {
      // error will be an Error if one occurred during the query
      if (error) return reject(error);
      // results will contain the results of the query
      resolve(results);
    });
  });
}

// Option A 
// CreateQuery(pool).then((results) => {
//   console.log(results);
// });

// Option B async/await
async function getResults() {
  const results = await CreateQuery(pool);
  console.log(results);
}

getResults();