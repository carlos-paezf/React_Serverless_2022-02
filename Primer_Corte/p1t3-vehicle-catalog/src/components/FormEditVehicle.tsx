import { FC, FormEvent, useEffect, useState } from "react"
import { VehicleProps } from '../types/vehicle';


const FormEditVehicle: FC<VehicleProps> = (props) => {

    const [ vehicle, setVehicle ] = useState<VehicleProps>({ ...props })
    const [ base64, setBase64 ] = useState<string>()

    const { code, model, license, photo, logo } = vehicle

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setVehicle({
            ...vehicle,
            [ e.currentTarget.name ]: value
        })
    }

    const handleEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(vehicle)
    }

    const handlePhoto = (e: FormEvent<HTMLInputElement>) => {
        if (!e.currentTarget.files?.length) return

        const mimeType = e.currentTarget.files![ 0 ].type
        if (mimeType.match(/image\/*/) === null) return

        const reader = new FileReader();

        reader.readAsDataURL(e.currentTarget.files![ 0 ]);

        reader.onload = () => {
            setBase64(`${ reader.result }`)
        }

        console.log(reader.readyState)

        setVehicle({
            ...vehicle,
            [ e.currentTarget.name ]: base64
        })
    }

    return (
        <form onSubmit={ handleEdit } className="container">
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Modelo</label>
                <input type="text" className="form-control" id="model" name="model" value={ model } onChange={ handleChange } />
            </div>

            <div className="mb-3">
                <label htmlFor="license" className="form-label">Licencia</label>
                <input type="text" className="form-control" id="license" name="license" value={ license } onChange={ handleChange } />
            </div>

            <div className="mb-3">
                <label htmlFor="photo" className="form-label">Foto</label>
                <div className="row">
                    <input type="file" className="form-control col-xs-12 col-md-6" id="photo" name="photo" onChange={ handlePhoto } />
                    <img className="col-xs-12 col-md-6 mt-3" src={ photo } alt={ model } />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="logo" className="form-label">Logo</label>
                <div className="row">
                    <input type="file" className="form-control col-xs-12 col-md-6" id="logo" name="logo" onChange={ handlePhoto } />
                    <img className="col-xs-12 col-md-6 mt-3" src={ logo } alt={ model } />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Actualizar modelo</button>
        </form>
    )
}


export default FormEditVehicle