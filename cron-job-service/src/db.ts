require('dotenv').config();
const knex = require('knex');
const config = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: 3306
};

const db = knex({
  client: 'mysql',
  connection: { ...config },
  debug: false
});

export default db;
