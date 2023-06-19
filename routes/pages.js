const express = require('express')
const loggedIn = require('../controllers/loggedIn')
const logout = require('../controllers/logout')
const router = express.Router()
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/register', (req, res) => {
    res.sendFile('register.html', { root: './public/' })
})

router.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './public/' })
})
// router.get('/logout', logout)

module.exports = router;