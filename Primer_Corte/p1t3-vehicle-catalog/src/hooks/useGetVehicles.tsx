import { useEffect, useState } from "react"
import VehicleService from "../services/VehicleService"
import { VehicleProps } from "../types"


export const useGetVehicles = () => {
    const [ data, setData ] = useState<VehicleProps[]>([])
    const [ isFetching, setIsFetching ] = useState(true)

    useEffect(() => {
        VehicleService.getVehicles()
            .then(vehicles => setData(vehicles))
            .catch(e => console.log(e))
            .finally(() => setIsFetching(false))
    })

    return { data, isFetching }
}