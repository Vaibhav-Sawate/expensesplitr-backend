import { useState } from 'react';
import { PlusCircle, DollarSign, Tag, FileText } from 'lucide-react';

function ExpenseForm({ onAdd }) {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [isAdding, setIsAdding] = useState(false);

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
    setCategory('Food')
    setIsAdding(false);
  }

  const categories = [
    { value: 'Food', emoji: '🍔', color: 'from-orange-500 to-red-500' },
    { value: 'Transport', emoji: '🚗', color: 'from-blue-500 to-cyan-500' },
    { value: 'Utilities', emoji: '💡', color: 'from-yellow-500 to-orange-500' },
    { value: 'Entertainment', emoji: '🎬', color: 'from-purple-500 to-pink-500' },
    { value: 'Other', emoji: '📦', color: 'from-gray-500 to-gray-600' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
          <PlusCircle className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-black text-gray-800">Add New Expense</h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <FileText className="w-4 h-4 inline mr-1" />
            Description
          </label>
          <input 
            type='text' 
            className='w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all'
            placeholder='What did you spend on? (e.g., Groceries, Coffee)'
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
              <input 
                type='number'
                step="0.01"
                className='w-full bg-gray-50 border border-gray-200 pl-8 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all'
                placeholder='0.00'
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Tag className="w-4 h-4 inline mr-1" />
              Category
            </label>
            <select 
              className='w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all appearance-none cursor-pointer'
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.emoji} {cat.value}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isAdding}
          className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isAdding ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <PlusCircle className="w-5 h-5" />
              Add Expense
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm