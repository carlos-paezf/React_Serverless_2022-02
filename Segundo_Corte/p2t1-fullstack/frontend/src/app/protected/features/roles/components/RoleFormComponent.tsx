import { FC, FormEvent } from "react"
import { toast } from "react-toastify"
import { useForm } from "../../../../util/hooks"
import { FormComponentPropsType } from "../../../types"
import { useRoleValidate } from "../util/hooks/useRoleValidate"
import { RoleFormPropsType } from "../util/types"


export const RoleFormComponent: FC<FormComponentPropsType<RoleFormPropsType>> = ( { formType, initialState, handleOnSubmit } ) => {
    const { state, handleChange, roleName, roleDescription } = useForm<RoleFormPropsType>( initialState )

    const { 0: uniqueRoleName, 2: errorRoleName } = useRoleValidate( roleName )

    const handleErrorField = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if ( !uniqueRoleName ) {
            return toast.error( "Por favor revise los errores en el formulario", {
                position: toast.POSITION.TOP_RIGHT
            } )
        }

        if ( errorRoleName ) {
            return toast.error( "Ups!!! Ha ocurrido un error en el servidor, inténtelo más tarde", {
                position: toast.POSITION.TOP_RIGHT
            } )
        }
    }

    return (
        <form className="user-form m-4" onSubmit={ ( e ) => {
            return ( ( !uniqueRoleName || errorRoleName ) && formType === 'NEW' )
                ? handleErrorField( e )
                : handleOnSubmit( e, state )
        } }>
            <div className="my-3">
                <h3>Datos Básicos</h3>
            </div>

            <div className="my-3">
                <div className="form-floating">
                    <input type="text" id="roleName" className="form-control" placeholder="Nombre de rol" name="roleName" value={ roleName.toUpperCase() } onChange={ handleChange } required />
                    <label htmlFor="roleName" className="label">Nombre de rol</label>
                    {
                        ( !uniqueRoleName && formType === 'NEW' ) && <span>El nombre de rol ya está en uso</span>
                    }
                </div>
            </div>
            <div className="my-3">
                <div className="form-floating">
                    <textarea id="roleDescription" className="form-control" placeholder="Descripción del rol" name="roleDescription" value={ roleDescription } onChange={ handleChange } required style={ { "height": "150px" } } />
                    <label htmlFor="roleDescription" className="label">Descripción del rol</label>
                </div>
            </div>

            <div className="my-3">
                <h3>Módulos</h3>
            </div>

            <div className="my-3">
                <h3>Permisos</h3>
            </div>

            <button type="submit" className="btn btn-success mt-1">{ ( formType === 'NEW' ) ? 'Crear rol' : 'Editar rol' }</button>

        </form>
    )
}