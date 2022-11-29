import { FC } from "react"
import { bufferPipe, datePipe } from "../../../../util/helpers"
import { UserRowComponentPropsType } from '../util/types/userType'
import iconUser from '../../../../assets/images/icon-user.png'


export const UserRowTableComponent: FC<UserRowComponentPropsType> = ( {
    user: { id, name, lastName, username, profileImage, email, position, role, updatedAt, deletedAt },
    handleShowUser, handleEditUser, handleDisabledUser, handleRestoreUser, handleDeleteUser
} ) => {

    return (
        <tr key={ id }>
            <td valign="middle">
                {
                    bufferPipe( profileImage ) !== 'N/A'
                        ? <img className="mini-profile-image" src={ bufferPipe( profileImage ) } alt="profileImage" />
                        : <img className="mini-profile-image" src={ iconUser } alt="" />
                }
            </td>
            <td valign="middle">{ `${ name } ${ lastName }` }</td>
            <td valign="middle">{ username }</td>
            <td valign="middle">{ email }</td>
            <td valign="middle">{ position }</td>
            <td valign="middle">{ role.roleName }</td>
            <td valign="middle">{ datePipe( updatedAt ) }</td>
            <td valign="middle">{ deletedAt ? datePipe( deletedAt ) : '' }</td>
            <td valign="middle">
                <ul style={ { listStyle: 'none' } }>
                    <li className="mt-1">
                        <button
                            className="btn btn-outline-success mr-2"
                            data-bs-toggle="modal" data-bs-target={ `#user-${ id }` }
                            data-target={ `#user-${ id }` }
                            onClick={ () => handleShowUser( id ) }>
                            Ver más
                        </button>
                        <button className="btn btn-outline-primary" onClick={ () => handleEditUser( id ) }>Editar</button>
                    </li>
                    <li className="mt-1">
                        {
                            !deletedAt
                                ? <button className="btn btn-outline-dark mr-2" onClick={ () => handleDisabledUser( id ) }>Desactivar</button>
                                : <button className="btn btn-outline-dark mr-2" onClick={ () => handleRestoreUser( id ) }>Habilitar</button>
                        }
                        <button className="btn btn-outline-danger" onClick={ () => handleDeleteUser( id ) }>Eliminar</button>
                    </li>
                </ul>
            </td>
        </tr>
    )
}