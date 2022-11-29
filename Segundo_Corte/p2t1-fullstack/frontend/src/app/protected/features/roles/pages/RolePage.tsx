import LoadingComponent from "../../../../shared/components/LoadingComponent"

import { RolesListComponent } from "../components"
import { useState } from "react"
import { GetParamsPropsType } from "../../../types"
import { useActionsRoleList } from "../util/hooks/useActionsRoleList"
import { useForm } from "../../../../util/hooks"
import { RoleType } from "../util/types"
import { useGetRoles } from "../util/hooks/useGetRoles"
import { ListFilterComponent } from "../../../components"
import { useNavigate } from "react-router-dom"


const RolePage = () => {
    const navigate = useNavigate()

    const [ reloadData, setReloadData ] = useState( true )

    const { state: getParams, handleChange } = useForm<GetParamsPropsType>( {
        from: 0, limit: 10, all: false, order: 'ASC'
    } )

    const { isFetching, roles, partialCount, totalCount } = useGetRoles( getParams, reloadData, setReloadData )

    const {
        handleRefreshList,
        handleShowRole,
        handleEditRole,
        handleDisabledRole,
        handleRestoreRole,
        handleDeleteRole
    } = useActionsRoleList( getParams, setReloadData )

    if ( isFetching ) return <LoadingComponent />

    return (
        <>
            <div className="title-list">
                <h1>Listado de roles registrados en el sistema</h1>
                <button className="btn btn-outline-secondary mx-5" onClick={ handleRefreshList }>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <pre>Cantidad de resultados parciales: { partialCount }</pre>
                    <pre>Cantidad de resultados totales: { totalCount }</pre>
                </div>

                <button
                    className="btn btn-outline-secondary mx-5 col-auto"
                    onClick={ () => navigate( 'create-role' ) }>
                    <i className="fa-solid fa-plus"></i>&nbsp;Crear nuevo rol
                </button>
            </div>

            <ListFilterComponent handleChange={ handleChange } { ...getParams } />

            <RolesListComponent
                items={ roles as RoleType[] }
                handleShowItem={ handleShowRole }
                handleEditItem={ handleEditRole }
                handleDisabledItem={ handleDisabledRole }
                handleRestoreItem={ handleRestoreRole }
                handleDeleteItem={ handleDeleteRole }
            />
        </>
    )
}


export default RolePage