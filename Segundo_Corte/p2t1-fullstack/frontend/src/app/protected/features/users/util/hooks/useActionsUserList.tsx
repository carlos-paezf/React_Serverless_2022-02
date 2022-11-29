import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../../util/hooks"
import { cleanSelectedUser } from "../../reducers/usersSlice"
import { deleteUserAPI, disabledUserAPI, getUserByIdAPI, getUsersAPI, restoreUserAPI } from "../actions/userActions"
import { GetUsersParamsPropsType } from "../types"


export const useActionsUserList = ( state: GetUsersParamsPropsType, setReloadData: Dispatch<SetStateAction<boolean>> ) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRefreshList = () => {
        dispatch( getUsersAPI( state ) )
    }

    const handleShowUser = ( id: string ) => {
        dispatch( getUserByIdAPI( { id } ) )
        setReloadData( true )
    }

    const handleEditUser = ( id: string ) => {
        dispatch( cleanSelectedUser() )
        dispatch( getUserByIdAPI( { id } ) )
        navigate( `edit-user/${ id }` )
        setReloadData( true )
    }

    const handleDisabledUser = ( idUser: string ) => {
        dispatch( disabledUserAPI( idUser ) )
        setReloadData( true )
    }

    const handleRestoreUser = ( idUser: string ) => {
        dispatch( restoreUserAPI( idUser ) )
        setReloadData( true )
    }

    const handleDeleteUser = ( idUser: string ) => {
        const res = window.confirm( '¿Esta seguro de eliminar el usuario?' )
        if ( res ) {
            dispatch( deleteUserAPI( idUser ) )
            setReloadData( true )
        }
        return
    }

    return {
        handleRefreshList,
        handleShowUser,
        handleEditUser,
        handleDisabledUser,
        handleRestoreUser,
        handleDeleteUser
    }
}