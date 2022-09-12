import { createContext, useReducer } from 'react';

import { VehiclesMocks } from '../mocks/vehicles.mock';
import { mockReducer } from '../reducers/mock-reducer';

import type { ContextProps, State, VehicleContextProps } from '../types';


const initialVehicleState: State = {
    vehicles: VehiclesMocks
}


export const VehicleContext = createContext<VehicleContextProps>({} as VehicleContextProps)


export const VehicleContextProvider = ({ children }: ContextProps) => {
    const [ vehiclesState, dispatch ] = useReducer(mockReducer, initialVehicleState)

    const state = { state: vehiclesState, dispatch }

    return (
        <VehicleContext.Provider value={ state }>
            { children }
        </VehicleContext.Provider>
    )
}