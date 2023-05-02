const express = require('express');
const router = express.Router();
const mysql = require('mysql2');




const pool = mysql.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    charset: 'utf8mb4',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const promisePool = pool.promise();


router.get('/', async function(req, res, next) {
    const [rows] = await promisePool.query("SELECT * FROM al04frågor JOIN al04svar WHERE al04svar.frågeId = al04frågor.id,");
    res.render('index.html', {
        rows: rows,
        title: 'quiz',
    });
});