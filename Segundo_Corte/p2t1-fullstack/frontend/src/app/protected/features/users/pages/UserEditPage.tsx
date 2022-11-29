import { FormEvent, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../../../util/hooks"
import { getUserByIdAPI } from '../util/actions/userActions'
import { selectedUser } from "../reducers/usersSlice"
import { UserFormComponent } from '../components'
import { UpdateUserPropsType, UserFormPropsType } from '../util/types'
import { toast } from 'react-toastify'
import { updateUserThunk } from '../thunks/userThunks'


const UserEditPage = () => {
    const { idUser } = useParams()
    const user = useAppSelector( selectedUser )
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect( () => {
        dispatch( getUserByIdAPI( { id: idUser || '' } ) )
    }, [ idUser, dispatch ] )

    const handleEditUser = ( e: FormEvent<HTMLFormElement>, state: UserFormPropsType | UpdateUserPropsType ) => {
        e.preventDefault()

        dispatch( updateUserThunk( { idUser, ...state } as UpdateUserPropsType ) )
        navigate( '../../users' )

        return toast.success( "Se ha actualizado el usuario de manera correcta", {
            position: toast.POSITION.TOP_RIGHT
        } )
    }

    return (
        <>
            {
                ( !Object.entries( user ).length )
                    ? <h1>No se encontró el usuario</h1>
                    : <>
                        <h1 className='mb-3'>Formulario de Edición: { user.name }</h1>
                        <UserFormComponent
                            formType="EDIT"
                            initialState={ { ...user } }
                            handleOnSubmit={ handleEditUser }
                        />
                    </>
            }
        </>
    )
}


export default UserEditPage