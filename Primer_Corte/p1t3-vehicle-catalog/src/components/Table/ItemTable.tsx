import { FC } from "react"
import type { VehicleProps } from "../../types"
import ButtonIcon from "../Button/ButtonIcon"
import { useNavigate } from 'react-router-dom';


const ItemTable: FC<VehicleProps> = ({ code, model, license, photo, logo }) => {

    const navigate = useNavigate()

    return (
        <tr>
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
                    <ButtonIcon className="fa-solid fa-trash text-danger" handleClick={ () => { } } />
                </div>
            </td>
        </tr >
    )
}


export default ItemTable