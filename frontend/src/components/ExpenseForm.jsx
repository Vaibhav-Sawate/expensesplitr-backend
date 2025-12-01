import { useState } from 'react'

function ExpenseForm({ onAdd }) {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text || !amount) {
      alert("Please fill all fields")
      return
    }
    // Default date to today
    onAdd({ title: text, amount: +amount, category, date: new Date() }) 
    setText('')
    setAmount('')
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Add New Expense</h3>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Title Input */}
          <div className="md:col-span-5">
            <input 
              type='text' 
              className='w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all'
              placeholder='What did you spend on?'
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
          </div>

          {/* Amount Input */}
          <div className="md:col-span-3">
             <input 
              type='number' 
              className='w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all'
              placeholder='$ Amount'
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
          </div>

          {/* Category */}
          <div className="md:col-span-3">
             <select 
                className='w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all'
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">🍔 Food</option>
              <option value="Transport">🚗 Transport</option>
              <option value="Utilities">💡 Utilities</option>
              <option value="Entertainment">🎬 Entertainment</option>
              <option value="Other">📦 Other</option>
            </select>
          </div>

          {/* Button */}
          <div className="md:col-span-1">
            <button className='w-full h-full bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center shadow-sm'>
               <span className="text-xl font-bold">+</span>
            </button>
          </div>

      </form>
    </div>
  )
}

export default ExpenseForm