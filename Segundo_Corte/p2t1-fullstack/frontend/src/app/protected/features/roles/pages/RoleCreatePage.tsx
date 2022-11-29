import { useAppDispatch } from '../../../../util/hooks/dispatch'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { RoleFormPropsType } from '../util/types'
import { toast } from 'react-toastify'
import { RoleFormComponent } from '../components'
import { createRoleThunk } from '../thunks/roleThunks'


const RoleCreatePage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [ state ] = useState<RoleFormPropsType>( {
        roleName: '',
        roleDescription: ''
    } )

    const handleCreateRole = ( e: FormEvent<HTMLFormElement>, state: RoleFormPropsType ) => {
        e.preventDefault()

        dispatch( createRoleThunk( state as RoleFormPropsType ) )
        navigate( '../../roles' )

        return toast.success( "Se ha creado el rol de manera correcta", {
            position: toast.POSITION.TOP_RIGHT
        } )
    }

    return (
        <>
            <h1 className="mb-3">Añadir un nuevo rol</h1>
            <RoleFormComponent
                formType='NEW'
                initialState={ { ...state } }
                handleOnSubmit={ handleCreateRole }
            />
        </>
    )
}


export default RoleCreatePage