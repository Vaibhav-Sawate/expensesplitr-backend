import { Link, useNavigate } from 'react-router-dom'
// Let's use some icons later, for now text is fine
// import { FaSignOutAlt, FaSignInAlt, FaUser, FaWallet } from 'react-icons/fa'

function Header() {
  const navigate =  useNavigate()

    // Check if user is in local storage
  // JSON.parse turns the string back into an Object
  const user = JSON.parse(localStorage.getItem('user'))

  const onLogout = () => {
    // 1. Remove the user from storage
    localStorage.removeItem('user')
    // 2. Redirect to login
    navigate('/login')
    // 3. Reload to update UI
    window.location.reload()
  }
  

  return (
    <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='container mx-auto px-6 h-16 flex justify-between items-center'>
        
        {/* Brand */}
        <div className='flex items-center gap-2'>
          <div className='bg-indigo-50 text-indigo-600 p-2 rounded-lg'>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <Link to='/' className='text-xl font-bold text-gray-800 tracking-tight'>
            Smart<span className='text-indigo-600'>Expense</span>
          </Link>
        </div>

        {/* Navigation */}
        <ul className='flex items-center gap-6'>
          {user ? (
            <li className='flex items-center gap-4'>
              <div className='text-right hidden sm:block'>
                <p className='text-sm font-semibold text-gray-700'>{user.name}</p>
              </div>
              <button 
                onClick={onLogout} 
                className='text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors'
              >
                Logout
              </button>
            </li>
          ) : (
            <div className='flex gap-4'>
              <Link to='/login' className='text-gray-500 hover:text-indigo-600 px-3 py-2 font-medium text-sm transition-colors'>Login</Link>
              <Link to='/register' className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm'>Get Started</Link>
            </div>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header