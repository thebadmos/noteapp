const express = require('express');
const noteRouter = require('./note.route')

const router = new express.Router();

router.get('/', (req,res) =>{
     res.send('welcome to our app');
})
router.use(noteRouter);

module.exports = router;