const express = require('express');
const {createExpense, getExpenses} = require('../controllers/expenseController');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

//this can also be written
//router.route('/').get(protect, getExpenses).post(protect, createExpense);

router.post('/', protect, createExpense);
router.get('/', protect, getExpenses);

module.exports= router;