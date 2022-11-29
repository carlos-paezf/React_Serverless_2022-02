import { FormEvent, useState } from "react"
import { loginAPI } from "../features/login/util/actions/loginActions"

import { useForm, useAppDispatch } from "../../util/hooks"
import type { LoginPropsType } from "../features/login/util/types/authTypes"



export const LoginFormComponent = () => {
    const dispatch = useAppDispatch()

    const { state, handleChange, emailOrUsername, password } = useForm<LoginPropsType>( {
        emailOrUsername: 'carlos-paezf',
        password: 'developer1234567890'
    } )

    const [ showPassword, setShowPassword ] = useState( false )

    const handleLogin = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        dispatch( loginAPI( state ) )
    }

    return (
        <form className="auth__form" onSubmit={ handleLogin }>
            <div className="auth__form-card">
                <div className="form-floating">
                    <input type="text" id="emailOrUsername" className="form-control" placeholder="Username o Email" name="emailOrUsername" value={ emailOrUsername } onChange={ handleChange } required />
                    <label htmlFor="emailOrUsername" className="label">Nombre de Usuario o Correo Electrónico</label>
                </div>
            </div>

            <div className="auth__form-card">
                <div className="input-group">
                    <div className="form-floating">
                        <input type={ !showPassword ? "password" : "text" } id="password-login" className="form-control" placeholder="Contraseña" name="password" value={ password } onChange={ handleChange } required />
                        <label htmlFor="password" className="label">Contraseña</label>
                    </div>
                    <button className="btn btn-outline-secondary" type="button" onClick={ () => setShowPassword( !showPassword ) } id="login">
                        {
                            showPassword
                                ? <i className="fa-solid fa-eye-slash"></i>
                                : <i className="fa-solid fa-eye"></i>
                        }
                    </button>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Iniciar Sesión</button>
        </form >
    )
}