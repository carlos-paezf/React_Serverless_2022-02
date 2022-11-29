import { FC } from "react"
import { ListComponentPropsType } from "../../../types"
import { UserType } from "../util/types"
import { UserRowTableComponent } from "./UserRowTableComponent"


export const UserListComponent: FC<ListComponentPropsType<UserType>> = ( {
    items: users, handleShowItem, handleEditItem, handleDisabledItem, handleRestoreItem, handleDeleteItem
} ) => {
    return (
        <div className="list">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre Completo</th>
                        <th>Nombre de usuario</th>
                        <th>E-mail</th>
                        <th>Posición</th>
                        <th>Rol</th>
                        <th>Última fecha de actualización</th>
                        <th>Fecha de inhabilitación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length
                            ? users.map( ( user ) =>
                                <UserRowTableComponent
                                    key={ user.id }
                                    user={ user }
                                    handleDeleteUser={ handleDeleteItem }
                                    handleDisabledUser={ handleDisabledItem }
                                    handleEditUser={ handleEditItem }
                                    handleRestoreUser={ handleRestoreItem }
                                    handleShowUser={ handleShowItem }
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