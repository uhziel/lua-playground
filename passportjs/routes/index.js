const express = require('express');
const router  = express.Router();
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/dashboard', (req,res)=>{
    res.render('dashboard');
})

module.exports = router;