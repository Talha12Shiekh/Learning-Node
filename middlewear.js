import express from "express";
const router = express.Router();
import path from "path"

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
//   res.download("C:\\Users\\Hp\\Documents\\NODE JS ULTIMATE COURSE\\text.txt","Hello.txt")
// res.json({name:'talha shiekh'})
// res.redirect('https://talhawebsite.netlify.app')
})

export default router;