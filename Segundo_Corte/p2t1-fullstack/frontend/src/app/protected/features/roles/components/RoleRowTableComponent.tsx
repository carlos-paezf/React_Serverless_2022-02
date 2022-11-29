import { FC } from "react"
import { datePipe } from "../../../../util/helpers"
import { RoleRowComponentPropsType } from "../util/types/roleType"


export const RoleRowTableComponent: FC<RoleRowComponentPropsType> = ( {
    role: { id, roleName, roleDescription, updatedAt, deletedAt },
    handleShowRole, handleEditRole, handleDisabledRole, handleRestoreRole, handleDeleteRole
} ) => {

    return (
        <tr key={ id }>
            <td valign="middle">{ roleName }</td>
            <td valign="middle">{ roleDescription }</td>
            <td valign="middle">{ datePipe( updatedAt ) }</td>
            <td valign="middle">{ deletedAt ? datePipe( deletedAt ) : '' }</td>
            <td valign="middle">
                <ul style={ { listStyle: 'none' } }>
                    <li className="mt-1">
                        <button className="btn btn-outline-primary" onClick={ () => handleEditRole( id ) }>Editar</button>
                    </li>
                    <li className="mt-1">
                        {
                            !deletedAt
                                ? <button className="btn btn-outline-dark mr-2" onClick={ () => handleDisabledRole( id ) }>Desactivar</button>
                                : <button className="btn btn-outline-dark mr-2" onClick={ () => handleRestoreRole( id ) }>Habilitar</button>
                        }
                        <button className="btn btn-outline-danger" onClick={ () => handleDeleteRole( id ) }>Eliminar</button>
                    </li>
                </ul>
            </td>
        </tr>
    )
}