import { useState } from "react"

import LoadingComponent from "../../../../shared/components/LoadingComponent"

import { UserListComponent, UserModalComponent } from "../components"
import { useActionsUserList } from "../util/hooks/useActionsUserList"
import { UserType } from '../util/types/userType'
import { useGetUsers } from "../util/hooks/useGetUsers"
import { ListFilterComponent } from "../../../components"
import { GetParamsPropsType } from "../../../types"
import { useForm } from "../../../../util/hooks"


const UserPage = () => {
    const [ reloadData, setReloadData ] = useState( true )

    const { state: getParams, handleChange } = useForm<GetParamsPropsType>( {
        from: 0, limit: 10, all: false, order: 'ASC'
    } )

    const { isFetching, users, partialCount, totalCount } = useGetUsers( getParams, reloadData, setReloadData )

    const {
        handleRefreshList,
        handleShowUser,
        handleEditUser,
        handleDisabledUser,
        handleRestoreUser,
        handleDeleteUser
    } = useActionsUserList( getParams, setReloadData )

    if ( isFetching ) return <LoadingComponent />

    return (
        <>
            <div className="title-list">
                <h1>Listado de usuarios registrados en el sistema</h1>
                <button className="btn btn-outline-secondary mx-5" onClick={ handleRefreshList }>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>

                <div>
                    <pre>Cantidad de resultados parciales: { partialCount }</pre>
                    <pre>Cantidad de resultados totales: { totalCount }</pre>
                </div>
            </div>

            <ListFilterComponent handleChange={ handleChange } { ...getParams } />

            <UserListComponent
                items={ users as UserType[] }
                handleShowItem={ handleShowUser }
                handleEditItem={ handleEditUser }
                handleDisabledItem={ handleDisabledUser }
                handleRestoreItem={ handleRestoreUser }
                handleDeleteItem={ handleDeleteUser }
            />

            <UserModalComponent />
        </>
    )
}


export default UserPage