import React, { useContext,useState } from 'react'
import Nav from '../components/Nav'
import { UserContext } from '../context/UserContext'
import Footer from '../components/Footer'
import { useForm } from 'react-hook-form'
export default function Login() {

    const { handleLogin, warning } = useContext(UserContext)
    const [showLoginPass, setShowLoginPass] = useState(false)


    const {
        register: registerLogin,
        handleSubmit: loginSubmit,
        formState: { errors: errorsLogin }
    } = useForm({
        defaultValues: {
            emailLogin: '',
            passwordLogin: '',
        }
    })

    const handleSubmit = loginSubmit((data) => {
        const datos = {
            email : data.emailLogin,
            password : data.passwordLogin
        }

        handleLogin(datos)
    })

    return (
        <div>
            <Nav />
            <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                    <div className="text-center">
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login </h3>
                        </div>
                    </div>
                    <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >


                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    {
                                    ...registerLogin('emailLogin', {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9]/,
                                            message: 'Must be email format valid'
                                        }

                                    })
                                    } />
                                {
                                    errorsLogin.emailLogin && <span className='text-red-400'>{errorsLogin.emailLogin?.message}</span>
                                }

                            </div>
                            <div className='relative'>
                                <label className="font-medium">
                                    Password
                                </label>
                                <input
                                    type={showLoginPass ? 'text' : 'password'}
                                    required
                                    className=" w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    {
                                    ...registerLogin('passwordLogin', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        }
                                    })
                                    }
                                />
                                <div className='absolute top-10 right-3'>

                                    <button type='button' onClick={() => setShowLoginPass(prevState => !prevState)}>
                                        {showLoginPass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                    </button>

                                </div>

                                {
                                    errorsLogin.passwordLogin && <span className='text-red-400'>{errorsLogin.passwordLogin?.message}</span>
                                }

                            </div>
                           
                            <button type='submit'
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Login
                            </button>
                        </form>

                        {
                            warning && <h1 className='text-red-500'>{warning}</h1>
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )

}
