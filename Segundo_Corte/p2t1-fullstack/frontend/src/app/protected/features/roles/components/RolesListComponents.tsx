import { FC } from "react"
import type { ListComponentPropsType } from "../../../types"
import { RoleType } from "../util/types"
import { RoleRowTableComponent } from "./RoleRowTableComponent"


export const RolesListComponent: FC<ListComponentPropsType<RoleType>> = ( {
    items: roles, handleShowItem, handleEditItem, handleDisabledItem, handleRestoreItem, handleDeleteItem
} ) => {
    return (
        <div className="list">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre del rol</th>
                        <th>Descripción</th>
                        <th>Última fecha de actualización</th>
                        <th>Fecha de inhabilitación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        roles.length
                            ? roles.map( ( role ) =>
                                <RoleRowTableComponent
                                    key={ role.id }
                                    role={ role }
                                    handleDeleteRole={ handleDeleteItem }
                                    handleDisabledRole={ handleDisabledItem }
                                    handleEditRole={ handleEditItem }
                                    handleRestoreRole={ handleRestoreItem }
                                    handleShowRole={ handleShowItem }
                                />
                            )
                            : <tr>
                                <td colSpan={ 9 } valign="middle" align="center">No se encontrón resultados en la búsqueda</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}