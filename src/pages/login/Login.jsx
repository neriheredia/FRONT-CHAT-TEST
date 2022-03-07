import React, { useContext, useRef } from 'react'
import './login.css'
import {AuthContext} from '../../context/AuthContext'
import { loginCall } from '../../apiCalls'


const Login = () => {
    const username = useRef()
    const password = useRef()
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall(
            { username: username.current.value, password: password.current.value },
            dispatch
        )
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}
                className='formLogin'
            >
                <input
                    className='inputLogin'
                    type="text"
                    placeholder='Username...'
                    ref={username}
                    required
                />
                <input
                    className='inputLogin'
                    type="password"
                    placeholder='Password...'
                    ref={password}
                    required
                />
                <button className='btnLogin'>Login</button>
            </form>
        </div>
    )
}

export default Login