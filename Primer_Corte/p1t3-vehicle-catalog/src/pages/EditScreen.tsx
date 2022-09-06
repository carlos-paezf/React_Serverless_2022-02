import { useParams } from "react-router-dom"
import { useGetVehicleByCode } from "../hooks/useGetVehicleByCode"
import Title from '../components/Title';
import Loading from "../components/Loading";
import NotFoundScreen from "./NotFoundScreen";
import FormEditVehicle from "../components/FormEditVehicle";


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