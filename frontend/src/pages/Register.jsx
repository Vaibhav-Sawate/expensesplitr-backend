import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-toastify'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password} = formData;

    const onChange =(e) =>{
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit =async(e) =>{
        e.preventDefault()

        try{
            //WE are trying to hit backend runninf on port 5000
            const response = await axios.post('https://localhost:500/api/users', formData)
            
            console.log(response.data)
            alert("Success! Check console")
        } catch (error) {
            console.error(error)
            alert("Error! Check console.")
    }
    }
    
  return (
    <>
      <section className='heading text-center mb-10'>
        <h1 className='text-4xl font-bold mb-4'>Register</h1>
        <p className='text-gray-600 text-xl'>Create your account</p>
      </section>

      <section className='form max-w-md mx-auto'>
        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            className='border border-gray-300 p-3 rounded-lg'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
          />
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
export default Register