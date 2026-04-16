const express = require('express');
const { postSignup, getSignup, postSignin, getSignin, getDashboard, getAllUsers } = require('../controllers/user.controller');
const router = express.Router();

// Define routes and link them to controller functions

router.get('/signup', getSignup);
router.post('/register', postSignup);
router.get('/signin', getSignin);
router.post('/login', postSignin);
router.get('/dashboard', getDashboard);
router.get('/registeredUsers', getAllUsers)

module.exports = router;