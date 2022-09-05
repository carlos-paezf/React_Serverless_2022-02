import { useParams } from "react-router-dom"
import DetailVehicle from "../components/DetailVehicle"
import Loading from "../components/Loading"
import Title from "../components/Title"
import { useGetVehicleByCode } from "../hooks/useGetVehicleByCode"
import NotFoundScreen from "./NotFoundScreen"


const DetailScreen = () => {
    const { vehicleId } = useParams()

    const { data, isError, isFetching } = useGetVehicleByCode(vehicleId!)

    return (
        <>
            <Title title="Detalles" />
            {
                isFetching
                    ? <Loading />
                    : isError
                        ? <NotFoundScreen />
                        : <DetailVehicle { ...data! } />
            }
        </>
    )
}


export default DetailScreen