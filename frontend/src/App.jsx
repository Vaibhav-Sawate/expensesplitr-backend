import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from './components/Header'
import Landing from './pages/Landing'
import { Navigate } from 'react-router-dom'
function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
    <Router>
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path= '/' element ={user ? <Navigate to='/dashboard'/>: <Landing/>}/>
        <Route path='/login' element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to="/dashboard" /> : <Register />} />
          
          {/* Protected Route */}
        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path='*' element={<Navigate to='/' />} />

      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App