import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import ExpenseForm from "../components/ExpenseForm"
import ExpenseItem from "../components/ExpenseItem"
import ExpenseChart from "../components/ExpenseChart"


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
    
    return(
        <div className="min-h-screen pb-10">
            {/* 1. Header Area */}
            <div className="bg-white border-b border-gray-200 pt-8 pb-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-500 mt-1">Welcome back, {user && user.name}</p>
                        </div>
                        
                        {/* Summary Card */}
                        <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-lg shadow-indigo-200 min-w-[280px]">
                            <p className="text-indigo-100 text-xs font-bold uppercase tracking-wider mb-1">Total Balance</p>
                            <h2 className="text-3xl font-bold">${totalSpend.toFixed(2)}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Content - Grid Layout */}
            <div className="container mx-auto px-6 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* LEFT COLUMN: Feed */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* The Form */}
                        <ExpenseForm onAdd={addExpense}/>

                        {/* Recent Transactions Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4 px-2">
                                <h3 className="font-bold text-gray-700">Recent Transactions</h3>
                                <span className="text-xs font-medium text-gray-400 bg-white px-2 py-1 rounded-md border border-gray-200">
                                    {expenses.length} records
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
                                <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center">
                                    <p className="text-gray-400 font-medium">No transactions yet</p>
                                    <p className="text-gray-400 text-sm mt-1">Add your first expense above</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Analytics */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                            <h3 className="font-bold text-gray-800 mb-6">Spending Analysis</h3>
                            <ExpenseChart expenses={expenses} />
                            
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Budget Status</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-gray-600">Monthly Cap</span>
                                            <span className="font-bold text-gray-900">$2,000</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 w-[65%] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-gray-600">Savings</span>
                                            <span className="font-bold text-gray-900">$350</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[30%] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Dashboard