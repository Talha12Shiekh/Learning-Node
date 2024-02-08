const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
    res.sendFile("/hello.html",{root:"./public"});
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Blog')
})

module.exports = router