const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
var i = 1;
var points = 0;



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


router.get('/', async function (req, res, next) {
    const [quiz] = await promisePool.query("SELECT id FROM al04frågor")
    res.render('index.njk', {
        title: 'welcome to quiz',
        quiz: quiz
    });
});

router.get('/quiz/:id', async function(req, res, next) {
    const [quiz] = await promisePool.query("SELECT * FROM al04frågor JOIN al04svar on frågeid = al04frågor.id where frågeId = ?", [req.params.id]);

    
    res.render('quiz.njk', {
        quiz: quiz,
        title: 'quiz',
        fråga: req.params.id,
        points: points
    });
});


router.post('/answer', async function(req, res, next) {

    if (req.body.svar == 1) {
        points++;
    }


    if(i < 5) {
    i++;
    res.redirect('/quiz/'+ i)
    } else {
        res.redirect('/result')
    }
    
});

router.get('/result', function(req, res, next) {

    
    res.render('result.njk', {
        title: 'Result',
        points: points
    })
    i = 1;
    points = 0;
})



module.exports = router;