import React, { useContext, useState , useRef} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { UserContext } from '../context/UserContext'
import { useForm } from 'react-hook-form'
export default function Register() {

  const { user, warning, handleSubmit } = useContext(UserContext)
  const [showRegisterPass, setShowRegisterPass] = useState(false)

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: errorsRegister },
    watch
  } = useForm({
    defaultValues: {
      name: '',
      emailRegister: '',
      passwordRegister: '',
      confPasswordRegister: ''
    }
  })

  const refPassword = useRef(null)
  refPassword.current = watch('passwordRegister', '')

  const handleRegister = handleRegisterSubmit((data) => {
      const datos = {
        name : data.name,
        user: data.emailRegister,
        password: data.passwordRegister
      }

      handleSubmit(datos)
  })

  return (
    <div>
      <Nav />
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
              <p className="">Already have an account? <p className="font-medium text-indigo-600 hover:text-indigo-500">Log in</p></p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form
              onSubmit={handleRegister}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  {
                  ...registerRegister('name', {
                    required: {
                      value: true,
                      message: 'Name must be provided'
                    },
                    minLength: {
                      value: 6,
                      message: 'Min length 6'
                    },
                    maxLength: {
                      value: 30,
                      message: 'Max length 30'
                    }

                  })
                  } />
                {
                  errorsRegister.name && <span className='text-red-400'>{errorsRegister.name?.message}</span>
                }

              </div>
              <div>
                <label className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  {
                  ...registerRegister('emailRegister', {
                    required: {
                      value: true,
                      message: 'Email must be provided'
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9]/,
                      message: 'Must be email format valid'
                    }

                  })
                  } />
                {
                  errorsRegister.emailRegister && <span className='text-red-400'>{errorsRegister.emailRegister?.message}</span>
                }

              </div>
              <div className='relative'>
                <label className="font-medium">
                  Password
                </label>
                <input
                  type={showRegisterPass ? 'text' : 'password'}
                  required
                  className=" w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  {
                  ...registerRegister('passwordRegister', {
                    required: {
                      value: true,
                      message: 'Password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Min length 6'
                    },
                    maxLength: {
                      value: 30,
                      message: 'Max length 30'
                    }
                  })
                  } />
                <div className='absolute top-10 right-3'>
                 
                  <button type='button' onClick={() => setShowRegisterPass(prevState => !prevState)}>
                    {showRegisterPass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                  </button>

                </div>
                {
                  errorsRegister.passwordRegister && <span className='text-red-400'>{errorsRegister.passwordRegister?.message}</span>
                }

              </div>
              <div>
                <label className="font-medium">
                  Confirm Password
                </label>
                <input
                  type={showRegisterPass ? 'text' : 'password'}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  {
                    ...registerRegister('confPasswordRegister', {
                        validate: (value) => {
                            return value === refPassword.current || 'Password must be identical'
                        }
                    })
                    } />
                {
                    errorsRegister.confPasswordRegister && <span className='text-red-400'>{errorsRegister.confPasswordRegister?.message}</span>
                }
                
              </div>
              <button type='submit'
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Create account
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
