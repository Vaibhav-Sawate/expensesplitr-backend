import { Link, useNavigate } from 'react-router-dom'
// Let's use some icons later, for now text is fine

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
    <header className='flex justify-between items-center py-5 border-b border-gray-200 mb-10'>
      <div className='logo'>
        <Link to='/' className='text-2xl font-black text-blue-800'>SmartExpense</Link>
      </div>
      <ul className='flex items-center gap-5'>
        {user ? (
          // IF USER IS LOGGED IN, SHOW THIS:
          <li>
            <button onClick={onLogout} className='flex items-center gap-1 hover:text-red-600 font-medium'>
               Logout ({user.name})
            </button>
          </li>
        ) : (
          // IF USER IS LOGGED OUT, SHOW THIS:
          <>
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
          </>
        )}
      </ul>
    </header>
  )
}

export default Header