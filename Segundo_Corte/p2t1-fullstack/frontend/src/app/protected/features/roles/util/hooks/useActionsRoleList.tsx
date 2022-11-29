import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../../util/hooks"
import { GetParamsPropsType } from '../../../../types/index'
import { cleanSelectedRole } from "../../reducers/rolesSlice"
import { deleteRoleAPI, disabledRoleAPI, getRoleByIdAPI, getRolesAPI, restoreRoleAPI } from "../actions/roleActions"


export const useActionsRoleList = ( state: GetParamsPropsType, setReloadData: any ) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRefreshList = () => {
        dispatch( getRolesAPI( state ) )
    }

    const handleShowRole = ( id: string ) => {
        dispatch( getRoleByIdAPI( { id } ) )
        setReloadData( true )
    }

    const handleEditRole = ( id: string ) => {
        dispatch( cleanSelectedRole() )
        dispatch( getRoleByIdAPI( { id } ) )
        navigate( `edit-role/${ id }` )
        setReloadData( true )
    }

    const handleDisabledRole = ( idRole: string ) => {
        dispatch( disabledRoleAPI( idRole ) )
        setReloadData( true )
    }

    const handleRestoreRole = ( idRole: string ) => {
        dispatch( restoreRoleAPI( idRole ) )
        setReloadData( true )
    }

    const handleDeleteRole = ( idRole: string ) => {
        const res = window.confirm( '¿Esta seguro de eliminar el rol?' )
        if ( res ) {
            dispatch( deleteRoleAPI( idRole ) )
            setReloadData( true )
        }
        return
    }

    return {
        handleRefreshList,
        handleShowRole,
        handleEditRole,
        handleDisabledRole,
        handleRestoreRole,
        handleDeleteRole
    }
}