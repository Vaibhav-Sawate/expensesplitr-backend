import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Used to redirect user
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/users/login', formData)

      // 1. Check if we got a token
      if (response.data) {
        // 2. Save the whole user object (id, name, email, token) to LocalStorage
        // We must convert the object to a string to save it.
        localStorage.setItem('user', JSON.stringify(response.data))
        
        // 3. Navigate to Dashboard
        navigate('/')
        
        // 4. Force a reload so the Header updates (Simple fix for now)
        window.location.reload()
      }

    } catch (error) {
      console.error(error)
      alert("Login Failed")
    }
  }

  return (
    <>
      <section className='heading text-center mb-10'>
        <h1 className='text-4xl font-bold mb-4'>Login</h1>
        <p className='text-gray-600 text-xl'>Login to start tracking expenses</p>
      </section>

      <section className='form max-w-md mx-auto'>
        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
          <input
            type='email'
            className='border border-gray-300 p-3 rounded-lg'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
          />
          <input
            type='password'
            className='border border-gray-300 p-3 rounded-lg'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}
          />
          <button type='submit' className='bg-black text-white p-3 rounded-lg font-bold hover:bg-gray-800 transition'>
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Login