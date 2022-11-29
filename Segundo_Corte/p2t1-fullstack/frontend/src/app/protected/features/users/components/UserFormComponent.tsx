import { FC, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { handlePhoto } from '../../../../util/helpers/handlePhoto'
import { useForm } from '../../../../util/hooks'
import { useUserValidateField } from '../util/hooks/useUserValidateField'
import { UserFormPropsType } from '../util/types'
import iconUser from '../../../../assets/images/icon-user.png'
import { bufferPipe } from '../../../../util/helpers/bufferPipe'
import { FormComponentPropsType } from '../../../types'


export const UserFormComponent: FC<FormComponentPropsType<UserFormPropsType>> = ( { formType, initialState, handleOnSubmit } ) => {
    const { state, handleChange, name, lastName, username, email, password, position, profileImage } = useForm<UserFormPropsType>( initialState )


    const { 0: uniqueUsername, 2: errorUsername } = useUserValidateField( 'username', username )
    const { 0: uniqueEmail, 2: errorEmail } = useUserValidateField( 'email', email )


    const handleErrorField = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( !uniqueUsername || !uniqueEmail ) {
            return toast.error( "Por favor revise los errores en el formulario", {
                position: toast.POSITION.TOP_RIGHT
            } )
        }

        if ( errorUsername || errorEmail ) {
            return toast.error( "Ups!!! Ha ocurrido un error en el servidor, inténtelo más tarde", {
                position: toast.POSITION.TOP_RIGHT
            } )
        }
    }

    const handleFile = async ( e: FormEvent<HTMLInputElement> ) => {
        await handlePhoto( e, handleChange )
    }


    return (
        <form className="user-form m-4" onSubmit={ ( e ) => {
            return ( ( !uniqueEmail || !uniqueUsername || errorEmail || errorUsername ) && formType === 'NEW' )
                ? handleErrorField( e )
                : handleOnSubmit( e, state )
        } } >
            <div className="my-3">
                <div className="form-floating">
                    <input type="text" id="name" className="form-control" placeholder="Nombre de pila" name="name" value={ name } onChange={ handleChange } required />
                    <label htmlFor="name" className="label">Nombre de pila</label>
                </div>
            </div>

            <div className="my-3">
                <div className="form-floating">
                    <input type="text" id="lastName" className="form-control" placeholder="Apellido" name="lastName" value={ lastName } onChange={ handleChange } required />
                    <label htmlFor="lastName" className="label">Apellidos</label>
                </div>
            </div>

            {
                ( formType === 'NEW' )
                    ? <>
                        <div className="my-3 input-group">
                            <div className="form-floating">
                                <input type="text" id="username" className="form-control" placeholder="Nombre de usuario" name="username" value={ username } onChange={ handleChange } required minLength={ 6 } />
                                <label htmlFor="username" className="label">Nombre de Usuario</label>
                                {
                                    !uniqueUsername && <span>El nombre de usuario ya está en uso</span>
                                }
                            </div>
                        </div>

                        <div className="my-3 input-group">
                            <div className="form-floating">
                                <input type="email" id="email" className="form-control" placeholder="Dirección de correo electrónico" name="email" value={ email } onChange={ handleChange } required pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?" />
                                <label htmlFor="email" className="label">Dirección de correo electrónico</label>
                                {
                                    !uniqueEmail && <span>El correo electrónico ya está registrado en la aplicación</span>
                                }
                            </div>
                        </div>

                        <div className="my-3">
                            <div className="form-floating">
                                <input type="text" id="password" className="form-control" placeholder="Contraseña genérica" name="password" value={ password } onChange={ handleChange } required minLength={ 6 } />
                                <label htmlFor="password" className="label">Contraseña genérica</label>
                            </div>
                        </div>
                    </>
                    : null
            }

            <div className="my-3">
                <div className="form-floating">
                    <input type="text" id="position" className="form-control" placeholder="Posición o cargo actual de usuario" name="position" value={ position } onChange={ handleChange } required />
                    <label htmlFor="position" className="label">Posición o cargo actual del usuario</label>
                </div>
            </div>

            <div className="my-3">
                <label htmlFor="profileImage" className="form-label">Foto de perfil</label>
                <input type="file" className="form-control" id="profileImage" name="profileImage" onChange={ handleFile } accept="image/*" />
                <img className="col-xs-12 col-md-6 mt-3 profile-image" src={ bufferPipe( profileImage ) === 'N/A' || !profileImage ? iconUser : bufferPipe( profileImage ) } draggable="true" alt="Error" />
            </div>

            <button type="submit" className="btn btn-success mt-1">{ ( formType === 'NEW' ) ? 'Crear usuario' : 'Editar usuario' }</button>
        </form >
    )
}