import { FC, useState } from "react"
import { useNavigate } from 'react-router-dom';

import ButtonIcon from "../../components/Button/ButtonIcon"
import TablePlaceholderSkeleton from "./TablePlaceholderSkeleton";

import { deleteAction } from "../../../util/actions/vehicles-actions";
import { useVehicles } from "../../../util/hooks/useVehicles";

import type { VehicleProps } from "../../../util/types";


const ItemTable: FC<VehicleProps> = ({ code, model, license, photo, logo }) => {
    const { dispatch } = useVehicles()
    const navigate = useNavigate()

    const [ isLoading, setIsLoading ] = useState(false)

    /**
     * I want to dispatch an action, but I want to wait 1 second before I dispatch it.
     */
    const handleDelete = () => {
        setIsLoading(true)
        const delay = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dispatch(deleteAction(code)))
            }, 1000)
        })

        delay
            .then(() => {
                alert('Vehículo eliminado del catalogo')
            })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            {
                isLoading
                    ? <TablePlaceholderSkeleton />
                    : <tr>
                        <td valign="middle" width={ "20%" }>{ code.split('-').at(0) }</td>
                        <td valign="middle" width={ "25%" }>{ model }</td>
                        <td valign="middle" width={ "25%" }>
                            <img className="table__logo" src={ logo } alt={ model } />
                        </td>
                        <td valign="middle" width={ "15%" }>{ license }</td>
                        <td valign="middle" width={ "15%" }>
                            <div className="d-flex td__icons m-auto">
                                <ButtonIcon className="fa-solid fa-eye text-dark" handleClick={ () => navigate(`/catalog/${ code }`) } />
                                <ButtonIcon className="fa-solid fa-pen text-primary" handleClick={ () => navigate(`/edit/${ code }`) } />
                                <ButtonIcon className="fa-solid fa-trash text-danger" handleClick={ handleDelete } />
                            </div>
                        </td>
                    </tr >
            }
        </>
    )
}


export default ItemTable