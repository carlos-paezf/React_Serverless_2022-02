import { FC } from "react"

import ButtonNavigate from '../../components/Button/ButtonNavigate';
import ImageModal from "../../components/Modal/ImageModal";

import type { VehicleProps } from '../../../util/types/components-props';


const VehicleCard: FC<VehicleProps> = ({ code, license, model, photo, logo }) => {
    return (
        <div className="card">
            <img src={ photo } className="card-img-top p-3" alt={ model } data-bs-toggle="modal" data-bs-target={ `#imageModal${ code }` } />

            <div className="card-body">
                <h4 className="card-title">Modelo: <code>{ model }</code></h4>
                <p className="card-text">Licencia: <code>{ license }</code></p>
                <ButtonNavigate text="Ver más" navigateUrl={ `/catalog/${ code }` }></ButtonNavigate>
            </div>

            <ImageModal model={ model } photo={ photo } code={ code } key={ code } />
        </div>
    )
}


export default VehicleCard