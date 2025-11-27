const express = require('express');
const {registerUser, loginUser} = require('../controllers/userController');
const router = express.Router();


//it means if someone sends a POST request to "/"
//that is /api/users it will run the registerUser funciotn
router.post('/', registerUser);

router.post('/login', loginUser);

module.exports = router;