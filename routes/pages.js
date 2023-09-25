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

router.get('/contatos', (req, res) => {
    res.sendFile('contatos.html', { root: './public/' })
})

router.get('/login', loggedIn, (req, res) => {
    if (!req.user) {
        res.sendFile('login.html', { root: './public/' })
        res.redirect("/lancaprojetos")
    } else if (req.user) {
        res.redirect("/lancaprojetos")
    }
})

router.get('/lancaprojetos', loggedIn, async (req, res) => {
    res.render('lancaprojetos', { status: "loggedIn", user: req.user })
})
router.get('/logout', logout)

router.get('/publicaProjetos', loggedIn, (req, res) => {
    if (!req.user) res.sendFile('login.html', { root: './public/' })
    res.sendFile('publicProject.html', { root: './public/' })

})

module.exports = router;