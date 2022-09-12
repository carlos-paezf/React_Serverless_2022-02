import { useEffect, useState } from "react"

import { VehicleProps } from "../types"
import { useVehicles } from "./useVehicles";


/**
 * It returns an object with two properties: data and isFetching. 
 * 
 * The data property is an array of VehicleProps. 
 * 
 * The isFetching property is a boolean. 
 * 
 * The data property is initially set to an empty array. 
 * 
 * The isFetching property is initially set to true. 
 * 
 * The useEffect hook is used to fetch the data. 
 * 
 * The data is fetched from the vehicles array in the useVehicles hook. 
 * 
 * The data is fetched asynchronously using a promise. 
 * 
 * The promise is resolved if the vehicles array has elements. 
 * 
 * The promise is rejected if the vehicles array is empty. 
 * 
 * The promise is resolved with the vehicles array. 
 * 
 * The promise is rejected with an error message.
 * @returns An object with two properties: data and isFetching.
 */
export const useGetVehicles = () => {
    const { vehicles } = useVehicles()

    const [ data, setData ] = useState<VehicleProps[]>([])
    const [ isFetching, setIsFetching ] = useState(true)


    useEffect(() => {
        const promiseData = new Promise((resolve, reject) => {
            setTimeout(() => {
                vehicles.length
                    ? resolve(vehicles)
                    : reject(new Error("No hay elementos"))
            }, 2000)
        })

        promiseData
            .then(vehicles => setData(vehicles as VehicleProps[]))
            .catch(e => console.log(e))
            .finally(() => setIsFetching(false))
    })


    return { data, isFetching }
}