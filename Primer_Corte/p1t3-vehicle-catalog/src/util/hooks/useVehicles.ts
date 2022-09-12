import { useContext } from "react"

import { VehicleContext } from "../context/VehicleContext"


/**
 * It returns the `vehicles` and `dispatch` from the `VehicleContext` state.
 * @returns The vehicles and dispatch from the VehicleContext.
 */
export const useVehicles = () => {
    const { state: { vehicles }, dispatch } = useContext(VehicleContext)

    return { vehicles, dispatch }
}