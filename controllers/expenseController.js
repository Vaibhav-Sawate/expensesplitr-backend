const Expense = require('../models/Expense');

const getExpenses = async(req, res) => {
    try{
        //fing expense where user filed matches with the logged in id
        const expenses = await Expense.find({ user: req.user.id});

        //REturn
        res.status(200).json(expenses);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}


const createExpense = async(req, res) =>{
    try{
        const {title, amount, category, date} = req.body;

        //validate
        if(!title || !amount || !category){
            return res.status(400).json({message: 'Please enter all the details'});
        }

        //create expense //here user should be added as req.user.id
        const expense = await Expense.create({
            title,
            amount,
            category,
            date,
            user : req.user.id
        });
        res.status(201).json(expense, {message: 'Expense Created'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {getExpenses, createExpense};