import { Link } from 'react-router-dom'
// Let's use some icons later, for now text is fine

function Header() {
  return (
    <header className='flex justify-between items-center py-5 border-b border-gray-200 mb-10'>
      <div className='logo'>
        <Link to='/' className='text-2xl font-black text-blue-800'>SmartExpense</Link>
      </div>
      <ul className='flex items-center gap-5'>
        <li>
          <Link to='/login' className='flex items-center gap-1 hover:text-blue-600 font-medium'>
             Login
          </Link>
        </li>
        <li>
          <Link to='/register' className='flex items-center gap-1 hover:text-blue-600 font-medium'>
             Register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header