function ExpenseItem({ expense, onDelete }) {
  
  // Icon & Style Logic
  const getCategoryStyle = (cat) => {
    switch(cat) {
      case 'Food': return { icon: '🍔', bg: 'bg-orange-50', text: 'text-orange-600' };
      case 'Transport': return { icon: '🚗', bg: 'bg-blue-50', text: 'text-blue-600' };
      case 'Utilities': return { icon: '💡', bg: 'bg-yellow-50', text: 'text-yellow-600' };
      case 'Entertainment': return { icon: '🎬', bg: 'bg-purple-50', text: 'text-purple-600' };
      default: return { icon: '📦', bg: 'bg-gray-50', text: 'text-gray-600' };
    }
  }

  const { icon, bg, text } = getCategoryStyle(expense.category);

  return (
    <div className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all duration-200 mb-3">
      
      {/* Left: Icon & Info */}
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl ${bg} ${text}`}>
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-sm">{expense.title}</h4>
          <div className="flex items-center gap-2 mt-1">
             <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
               {expense.category}
             </span>
             <span className="text-xs text-gray-400">
               • {new Date(expense.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
             </span>
          </div>
        </div>
      </div>

      {/* Right: Amount & Actions */}
      <div className="flex items-center gap-5">
        <span className="font-bold text-gray-900">
          -${expense.amount.toFixed(2)}
        </span>
        
        <button 
          onClick={() => onDelete(expense._id)} 
          className="text-gray-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100"
          title="Delete Transaction"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem