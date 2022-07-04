import React, { useState } from 'react'
import './login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { push } = useNavigate()

    const onSubmit = () => {
        axios.post('http://localhost:5000/api/login', {
            email: email,
            password: password
        })
            .then(({ data }) => {
                let session = {
                    id: data.id,
                    email: data.email,
                    name: data.name,
                    surname: data.surname
                }
                localStorage.setItem('auth', true)
                localStorage.setItem('session', JSON.stringify(session))
                push('/')
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

    return (
        <div className='pt-5'>
            <header className="max-w-lg mx-auto">
                    <h1 className="text-4xl font-bold text-white text-center">Bienvenid@ a Educabot</h1>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">¡Te estamos esperando!</h3>
                    <p className="text-gray-600 pt-2">Inicia sesión para ingresar a tu cuenta.</p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col">
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" onClick={onSubmit}>Ingresar</button>
                    </form>
                </section>
            </main>
            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">¿No tienes una cuenta? ¿Olvidaste tu contraseña? <a href="mailto:educabot.ap2022@outlook.com" className="font-bold hover:underline">Contáctate con el staff de Educabot.</a>.</p>
            </div>
        </div>
    )
}

export default Login