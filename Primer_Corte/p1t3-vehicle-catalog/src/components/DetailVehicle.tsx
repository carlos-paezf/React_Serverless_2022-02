import { FC } from "react"
import { VehicleProps } from "../types"


const DetailVehicle: FC<VehicleProps> = ({ code, license, model, photo, logo }) => {
    return (
        <div className="container card mb-3">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={ photo } className="img-fluid rounded-start" alt={ code } />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Modelo: <code>{ model }</code></h5>
                        <img className="mb-3" src={ logo } alt={ code } width="100%" />
                        <p className="card-text mb-3">Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo facere provident recusandae quo commodi ad ex doloribus aspernatur, maxime quam perferendis quas eum officia eaque debitis possimus vitae praesentium!</p>
                        <p className="card-text"><small className="text-muted">Licencia: { license }</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailVehicle