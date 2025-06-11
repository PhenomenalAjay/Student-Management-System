const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

//view all records
router.get('/',studentController.view)

//add new  record
router.get('/adduser',studentController.adduser);
router.post('/adduser',studentController.save);

//update record
router.get('/edituser/:id',studentController.edituser);
router.post('/edituser/:id',studentController.edit);

//Delete record
router.get('/deleteuser/:id',studentController.delete);

//Router
// router.get('/',(req,res)=>{

//     res.render('home');
// });

module.exports = router;