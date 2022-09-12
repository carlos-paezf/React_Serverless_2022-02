import { useEffect, useState } from 'react';

import { VehicleProps } from '../types';
import { useVehicles } from './useVehicles';


/**
 * It returns a vehicle object from a list of vehicles, based on a code
 * @param {string} code - string
 * @returns An object with three properties: data, isError and isFetching.
 */
export const useGetVehicleByCode = (code: string) => {
    const { vehicles } = useVehicles()

    const [ data, setData ] = useState<VehicleProps>()
    const [ isError, setIsError ] = useState(false)
    const [ isFetching, setIsFetching ] = useState(true)


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            const data = vehicles
                .filter((vehicle: VehicleProps) => vehicle.code === code)
                .shift()
            setTimeout(() => {
                data
                    ? resolve(data)
                    : reject(new Error('No se ha encontrado ningún vehículo con el código ingresado'))
            }, 1000)
        })

        promise.then((vehicle) => setData(vehicle as VehicleProps))
            .catch((e) => {
                setIsError(true)
                console.log(e)
            })
            .finally(() => setIsFetching(false))
    })


    return { data, isError, isFetching }
}