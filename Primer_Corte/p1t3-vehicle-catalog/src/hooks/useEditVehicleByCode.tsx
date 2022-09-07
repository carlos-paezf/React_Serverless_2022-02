import { useEffect, useState } from "react"
import VehicleService from "../services/VehicleService"
import { VehicleProps } from "../types"


export const useEditVehicleByCode = (vehicle: VehicleProps) => {
    const [ data, setData ] = useState<VehicleProps>()
    const [ isError, setIsError ] = useState(false)
    const [ isFetching, setIsFetching ] = useState(true)

    useEffect(() => {
        VehicleService.editVehicleByCode(vehicle)
            .then((vehicle) => {
                if (!vehicle) return
                console.log(vehicle)
                // setData(vehicle)
            })
            .catch((e) => {
                setIsError(true)
                console.log(e)
            })
            .finally(() => setIsFetching(false))
    })
    return { data, isError, isFetching }
}