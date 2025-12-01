import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import ExpenseForm from "../components/ExpenseForm"
import ExpenseItem from "../components/ExpenseItem"
import ExpenseChart from "../components/ExpenseChart"
import { TrendingUp, TrendingDown, Wallet, Receipt, Calendar, DollarSign } from 'lucide-react';


function Dashboard(){
    const navigate = useNavigate()
    const [expenses, setExpenses] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //Get user from Storage
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() =>{
        //if user, kick them to login
        if(!user){
            navigate('/login')
        } else {
            fetchExpense()
        }
    }, [user, navigate])

    //CREATE HEADER
    //Authorization Bearer Token
    const getAuthHeader =()=>{
        const token = user.token;
        console.log("My token is: ", token);
        return {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        }
    }

    //Get expenses
    const fetchExpense = async()=>{
        try{
            //pass header
            const response =await axios.get('/api/expenses', getAuthHeader())
            setExpenses(response.data)
            setIsLoading(false)
        } catch(error){
            console.log(error)
        }
    }

    //add expenses
    const addExpense = async(expenseData) =>{
        try{
            const response = await axios.post('/api/expenses', expenseData, getAuthHeader())
            //add it to ui
            setExpenses([...expenses, response.data])
            console.log("Expense added")
        } catch(error) {
            console.log(error)
            alert("Error adding expense")
        }
    }

    //delete expense
    const deleteExpense = async(id) =>{
        try{
            await axios.delete(`/api/expenses/${id}`, getAuthHeader())  //route not created yet
            //filter the detleted from ui
            setExpenses(expenses.filter((expense) =>expense._id !==id))
        } catch(error){
            console.log(error)
        }
    }

    const totalSpend= expenses.reduce((acc, curr) => acc+curr.amount,0)
    // Calculate this month's expenses
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const thisMonthExpenses = expenses.filter(exp => {
        const expDate = new Date(exp.date);
        return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
    });
    const thisMonthTotal = thisMonthExpenses.reduce((acc, curr) => acc + curr.amount, 0);

    // Calculate average expense
    const avgExpense = expenses.length > 0 ? totalSpend / expenses.length : 0;

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading your expenses...</p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pb-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 pt-8 pb-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                                Welcome back, {user && user.name}! 👋
                            </h1>
                            <p className="text-indigo-100 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Total Balance */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                                    <Wallet className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">ALL TIME</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Total Expenses</p>
                            <h3 className="text-3xl font-black text-gray-900">${totalSpend.toFixed(2)}</h3>
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                <Receipt className="w-3 h-3" />
                                {expenses.length} transactions
                            </div>
                        </div>

                        {/* This Month */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">THIS MONTH</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Monthly Spending</p>
                            <h3 className="text-3xl font-black text-gray-900">${thisMonthTotal.toFixed(2)}</h3>
                            <div className="flex items-center gap-1 mt-2 text-xs text-purple-600 font-semibold">
                                <TrendingUp className="w-3 h-3" />
                                {thisMonthExpenses.length} this month
                            </div>
                        </div>

                        {/* Average */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">AVERAGE</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-500 mb-1">Per Transaction</p>
                            <h3 className="text-3xl font-black text-gray-900">${avgExpense.toFixed(2)}</h3>
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                <TrendingDown className="w-3 h-3" />
                                Average spending
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 -mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left: Transactions Feed */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Add Expense Form */}
                        <ExpenseForm onAdd={addExpense} />

                        {/* Recent Transactions */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
                                    <Receipt className="w-5 h-5 text-indigo-600" />
                                    Recent Transactions
                                </h3>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-lg">
                                    {expenses.length} Total
                                </span>
                            </div>
                            
                            {expenses.length > 0 ? (
                                <div className="space-y-3">
                                    {expenses.map((expense) => (
                                        <ExpenseItem 
                                            key={expense._id} 
                                            expense={expense} 
                                            onDelete={deleteExpense} 
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Receipt className="w-12 h-12 text-indigo-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">No transactions yet</h4>
                                    <p className="text-gray-500">Start by adding your first expense above</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Analytics */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                            <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-indigo-600" />
                                Spending Analysis
                            </h3>
                            <ExpenseChart expenses={expenses} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Dashboard