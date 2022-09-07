import { VehicleProps } from '../types';
import { types } from './types';


interface ActionReducer {
    type: {}
    payload: unknown
}


const initialState = {
    vehiclesMocks: []
}


export const mockReducer = (state = initialState, action: ActionReducer) => {
    switch (action.type) {
        case types.read: return {
            ...state,
            vehiclesMocks: action.payload
        }

        case types.create: return {
            ...state,
            vehiclesMocks: [
                ...state.vehiclesMocks,
                action.payload
            ]
        }

        case types.edit: return {
            ...state,
            vehiclesMocks: []
        }

        case types.delete: return {
            ...state,
            vehiclesMocks: state.vehiclesMocks.filter((vehicle: VehicleProps) => {
                return vehicle.code !== action.payload
            })
        }
    }
}