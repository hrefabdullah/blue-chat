import React, { useState } from 'react'
import { IoIosInformationCircle } from "react-icons/io";

const Login = () => {

    const [currState, setCurState] = useState('Sign Up')


    return (
        <div className="flex justify-around items-center h-screen w-screen bg-cover bg-[url('https://images.unsplash.com/photo-1554310603-d39d43033735?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className=' h-screen flex flex-col justify-center items-center'>
                <img className='w-[200px]' src="https://www.svgrepo.com/show/514320/message.svg" alt="" />
                <h1 className='text-white text-6xl font-semibold'><span className='mr-2'>Blue</span>Chat</h1>
            </div>
            <form className='relative w-[30vw] h-[70vh] flex flex-col justify-center bg-white rounded-2xl items-center'>
                <h2 className='text-5xl mb-10 font-semibold'>{currState}</h2>
                { currState === 'Sign Up' ? <input className='border-2 text-lg mb-2 rounded-xl w-[80%] px-4 py-2' type="text" placeholder='Username' required /> : <></>}
                <input className='border-2 text-lg mb-2 rounded-xl w-[80%] px-4 py-2' type="email" placeholder='Email address' />
                <input className='border-2 text-lg mb-4 rounded-xl w-[80%] px-4 py-2' type="password" placeholder='Password' />
                <button className='bg-blue-700 text-white px-3 text-md py-2 rounded-md' type='submit'>{currState}</button>
                <div className='flex gap-2 mt-5'>
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy</p>
                </div>
                {currState === 'Sign Up' ? <p>Already have an account? <span className='opacity-80' onClick={() => {setCurState('Login')}}>click here</span></p> : <p>Don't have an Account? <span className='opacity-80' onClick={() => {setCurState('Sign Up')}}>Register here</span></p>}
            </form>
        </div>
    )
}

export default Login