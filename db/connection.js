const mysql = require('mysql2');
require('dotenv').config()

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',      
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: 'management'
    },
    console.log('Connected to the management database.')
  );

  module.exports = db;