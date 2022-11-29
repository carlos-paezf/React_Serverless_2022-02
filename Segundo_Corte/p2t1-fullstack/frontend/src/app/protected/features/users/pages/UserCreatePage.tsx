import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAppDispatch } from "../../../../util/hooks"
import { createUserThunk } from '../thunks'
import { UserFormComponent } from '../components'
import { UpdateUserPropsType, UserFormPropsType } from '../util/types'


const UserCreatePage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [ state ] = useState<UserFormPropsType>( {
        name: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        position: '',
        profileImage: '',
        role: 'GUEST'
    } )

    const handleCreateUser = ( e: FormEvent<HTMLFormElement>, state: UserFormPropsType | UpdateUserPropsType ) => {
        e.preventDefault()

        dispatch( createUserThunk( state as UserFormPropsType ) )
        navigate( '../../users' )

        return toast.success( "Se ha creado el usuario de manera correcta", {
            position: toast.POSITION.TOP_RIGHT
        } )
    }

    return (
        <>
            <h1 className='mb-3'>Añadir un nuevo usuario</h1>
            <UserFormComponent
                formType='NEW'
                initialState={ { ...state } }
                handleOnSubmit={ handleCreateUser }
            />
        </>
    )
}


export default UserCreatePage