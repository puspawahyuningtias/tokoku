import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../Utils'
import { toast } from 'react-hot-toast'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const login = async () => {
        try {
            await instance.post('auth/login',
                {
                    email: email,
                    password: password
                }
            ).then((response) => {
                localStorage.setItem('tokoku', response.data.access_token)
                navigate("/home")
            })
        } catch (error) {
            console.log(error)
            toast.error("Invalid email and/or password!!!")
        }
    }

    const ChangePasswordType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }
    return (
        <div className='px-[82px] py-[170px]'>
            <h1 className='text-[30px] text-[#2F3044] font-medium capitalize'>Selamat Datang</h1>
            <div className=''>
                <h1 className='text-[13px] text-[#454545] font-medium mb-2'>Email</h1>
                <input onChange={(e) => setEmail(e.target.value)} type='text' className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px] mb-[15px]" placeholder='Masukkan Email...' />
                <h1 className='text-[13px] text-[#454545] font-medium mb-2'>Kata Sandi</h1>
                <div className='relative'>
                    <input onChange={(e) => setPassword(e.target.value)} type={passwordType} className="bg-white border border-[#780000] text-[#A8A8A8] text-[12px] rounded-lg block w-full py-[13px] px-[20px]" placeholder='Masukkan Kata Sandi...' />
                    <button onClick={ChangePasswordType} className='absolute right-5 top-3 text-xl text-[#A8A8A8]'>
                        {passwordType === 'text' ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" /></svg>
                        }
                    </button>
                </div>
                <button onClick={login} className='py-[10px] px-[195px] text-white rounded-md bg-[#0E5073] text-[12px] w-full font-semibold mb-[14px] mt-[15px] capitalize'>Masuk</button>
            </div>
        </div>
    )
}

export default Login