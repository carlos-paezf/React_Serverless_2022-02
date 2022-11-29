import { FormEvent, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from "../../../../util/hooks"
import { RoleFormPropsType } from '../util/types'
import { selectedRole } from '../reducers/rolesSlice'
import { getRoleByIdAPI } from '../util/actions/roleActions'
import { RoleFormComponent } from '../components/RoleFormComponent'
import { updateRoleThunk } from '../thunks/roleThunks'


const RoleEditPage = () => {
    const { idRole } = useParams()
    const role = useAppSelector( selectedRole )
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect( () => {
        dispatch( getRoleByIdAPI( { id: idRole || '' } ) )
    }, [ idRole, dispatch ] )

    const handleEditRole = ( e: FormEvent<HTMLFormElement>, state: RoleFormPropsType ) => {
        e.preventDefault()

        dispatch( updateRoleThunk( { idRole, ...state } as RoleFormPropsType ) )
        navigate( '../../roles' )

        return toast.success( "Se ha actualizado el rol de manera correcta", {
            position: toast.POSITION.TOP_RIGHT
        } )
    }

    return (
        <>
            {
                ( !Object.entries( role ).length )
                    ? <h1>No se encontró el rol</h1>
                    : <>
                        <h1 className='mb-3'>Formulario de Edición: { role.roleName }</h1>
                        <RoleFormComponent
                            formType="EDIT"
                            initialState={ { ...role } }
                            handleOnSubmit={ handleEditRole }
                        />
                    </>
            }
        </>
    )
}


export default RoleEditPage