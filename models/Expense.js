const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title:{
        type: String,
        required: [true, 'Please add the title']
    },
    amount: {
        type: Number,
        required: [true, 'Please add the amount']
    },
    category: {
        type: String,
        required: [true, 'Please add the category']
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);