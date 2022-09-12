import { FC, FormEvent } from "react"
import { useNavigate } from "react-router-dom";

import { editAction } from "../../../util/actions/vehicles-actions";
import { handlePhoto } from "../../../util/functions/handle-photo";
import { useForm } from "../../../util/hooks/useForm";
import { useVehicles } from "../../../util/hooks/useVehicles";

import type { VehicleProps } from "../../../util/types";


const FormEditVehicle: FC<VehicleProps> = (props) => {
    const { dispatch } = useVehicles()
    const navigate = useNavigate()

    const { state: vehicle, handleChange } = useForm<VehicleProps>({ ...props })

    const { model, license, photo, logo } = vehicle

    /**
     * "The function handleEdit takes an event of type FormEvent and returns nothing."
     * 
     * The FormEvent type is a built-in type that represents the event object passed to event handlers
     * for form events
     * @param e - FormEvent<HTMLFormElement>
     */
    const handleEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (model.trim() === '' || license.trim() === '' || photo.trim() || logo.trim()) {
            alert('No se pueden enviar campos en blanco')
        } else {
            dispatch(editAction({ ...vehicle }))
            navigate(-1)
        }
    }

    /**
     * HandleFile is a function that takes an event as an argument and returns a promise that calls
     * handlePhoto with the event and handleChange as arguments.
     * @param e - FormEvent&lt;HTMLInputElement&gt; - this is the event that is triggered when the user
     * selects a file.
     */
    const handleFile = async (e: FormEvent<HTMLInputElement>) => {
        await handlePhoto(e, handleChange)
    }

    return (
        <form onSubmit={ handleEdit } className="container">
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Modelo</label>
                <input type="text" className="form-control" id="model" name="model" value={ model } onChange={ handleChange } />
            </div>

            <div className="mb-3">
                <label htmlFor="license" className="form-label">Licencia</label>
                <input type="text" className="form-control" id="license" name="license" value={ license } onChange={ handleChange } maxLength={ 6 } />
            </div>

            <div className="mb-3">
                <label htmlFor="photo" className="form-label">Foto</label>
                <div className="row">
                    <input type="file" className="form-control col-xs-12 col-md-6" id="photo" name="photo" onChange={ handleFile } accept="image/*" />
                    <img className="col-xs-12 col-md-6 mt-3" src={ photo } alt={ model } />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="logo" className="form-label">Logo</label>
                <div className="row">
                    <input type="file" className="form-control col-xs-12 col-md-6" id="logo" name="logo" onChange={ handleFile } accept="image/*" />
                    <img className="col-xs-12 col-md-6 mt-3" src={ logo } alt={ model } />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Actualizar modelo</button>
        </form>
    )
}


export default FormEditVehicle