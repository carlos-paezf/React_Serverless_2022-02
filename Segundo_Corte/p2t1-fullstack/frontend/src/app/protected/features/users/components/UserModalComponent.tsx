import { bufferPipe, datePipe } from "../../../../util/helpers"
import { selectedUser } from '../reducers/usersSlice'
import { useAppSelector } from "../../../../util/hooks"
import iconUser from '../../../../assets/images/icon-user.png'



export const UserModalComponent = () => {
    const user = useAppSelector( selectedUser )

    return (
        ( !Object.keys( user ).length )
            ? <></>
            : <div className="modal modal-xl fade" id={ `user-${ user.id }` } aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Usuario: <code>{ user.username }</code></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="mx-5 modal-body row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <h5 className="mb-3" id="exampleModalLabel">Nombre: <code>{ user.name }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Apellido: <code>{ user.lastName }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Email: <code>{ user.email }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Rol: <code>{ user.role.roleName }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Posición o Cargo: <code>{ user.position }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Fecha de creación: <code>{ datePipe( user.createdAt ) }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Última modificación: <code>{ datePipe( user.updatedAt ) }</code></h5>
                                <h5 className="mb-3" id="exampleModalLabel">Fecha de desactivación: <code>{ user.deletedAt ? datePipe( user.deletedAt ) : 'N/A' }</code></h5>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                {
                                    bufferPipe( user.profileImage ) !== 'N/A'
                                        ? <img className="profile-image" src={ bufferPipe( user.profileImage ) } alt="profileImage" />
                                        : <img className="profile-image" src={ iconUser } alt="" />
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}