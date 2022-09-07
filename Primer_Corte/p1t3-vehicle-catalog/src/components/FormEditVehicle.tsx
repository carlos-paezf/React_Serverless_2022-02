import { FC, FormEvent, useEffect, useState } from "react"
import { VehicleProps } from '../types/vehicle';
import { useEditVehicleByCode } from '../hooks/useEditVehicleByCode';


const FormEditVehicle: FC<VehicleProps> = (props) => {

    const [ vehicle, setVehicle ] = useState<VehicleProps>({ ...props })
    const [ file, setFile ] = useState<File>()
    const [ base64, setBase64 ] = useState<string>()

    const { code, model, license, photo, logo } = vehicle

    const handleEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setVehicle({
            ...vehicle,
            [ e.currentTarget.name ]: value
        })
    }

    const handlePhoto = (e: FormEvent<HTMLInputElement>) => {
        if (!e.currentTarget.files?.length) return

        const file = e.currentTarget.files![ 0 ]

        if (!file.type.match(/image\/*/)) {
            alert("Tipo de archivo no permitido")
            return
        }

        setVehicle({
            ...vehicle,
            [ e.currentTarget.name ]: base64
        })

        setFile(file)
    }

    useEffect(() => {
        let isCancel = false
        const reader = new FileReader();

        if (file) {
            reader.onload = () => {
                if (reader.result && !isCancel) {
                    setBase64(`${ reader.result }`)
                }
            }
            reader.readAsDataURL(file);
        }

        return () => {
            isCancel = false
            if (reader && reader.readyState === 1) {
                reader.abort()
            }
        }
    }, [ file ])

    useEditVehicleByCode(vehicle)

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
                    <input type="file" className="form-control col-xs-12 col-md-6" id="photo" name="photo" onChange={ handlePhoto } accept="image/*" />
                    <img className="col-xs-12 col-md-6 mt-3" src={ photo } alt={ model } />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="logo" className="form-label">Logo</label>
                <div className="row">
                    <input type="file" className="form-control col-xs-12 col-md-6" id="logo" name="logo" onChange={ handlePhoto } accept="image/*" />
                    <img className="col-xs-12 col-md-6 mt-3" src={ logo } alt={ model } />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Actualizar modelo</button>
        </form>
    )
}


export default FormEditVehicle