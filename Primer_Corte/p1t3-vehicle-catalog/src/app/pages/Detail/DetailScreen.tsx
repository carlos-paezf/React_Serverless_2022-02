import { useParams } from "react-router-dom"

import DetailVehicle from "./DetailVehicle"
import Loading from "../../components/Loading/Loading"
import Title from "../../components/Tittle/Title"
import NotFoundScreen from "../NotFoundScreen"

import { useGetVehicleByCode } from "../../../util/hooks/useGetVehicleByCode"


const DetailScreen = () => {
    const { vehicleId } = useParams()

    const { data, isError, isFetching } = useGetVehicleByCode(vehicleId!)

    return (
        <>
            <Title title={ `Detalles del modelo "${ data?.model }"` } />
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