import { useParams } from "react-router-dom"

import Title from '../../components/Tittle/Title';
import Loading from "../../components/Loading/Loading";
import NotFoundScreen from "../NotFoundScreen";
import FormEditVehicle from "./FormEditVehicle";

import { useGetVehicleByCode } from "../../../util/hooks/useGetVehicleByCode";


const EditScreen = () => {
    const { vehicleId } = useParams()

    const { data, isError, isFetching } = useGetVehicleByCode(vehicleId!)

    return (
        <>
            <Title title={ `Formulario de edición del modelo "${ data?.model }"` } />
            {
                isFetching
                    ? <Loading />
                    : isError
                        ? <NotFoundScreen />
                        : <FormEditVehicle { ...data! } />
            }
        </>
    )
}


export default EditScreen