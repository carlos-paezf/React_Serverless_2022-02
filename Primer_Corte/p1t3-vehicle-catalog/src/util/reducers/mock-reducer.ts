import { Types } from './types';

import type { ActionReducer, State, VehicleProps } from '../types';


/**
 * It takes a state and an action, and returns a new state.
 * @param {State} state - State - The current state of the reducer
 * @param {ActionReducer}  - State - The state of the reducer
 * @returns The state is being returned.
 */
export const mockReducer = (state: State, { type, payload }: ActionReducer): State => {
    switch (type) {
        case Types.READ: return {
            ...state,
            vehicles: payload
        }

        case Types.CREATE: return {
            ...state,
            vehicles: [
                ...state.vehicles,
                payload
            ]
        }

        case Types.EDIT: return {
            ...state,
            vehicles: state.vehicles.map(({ ...vehicle }) => {
                if (vehicle.code === payload.code) {
                    vehicle = { ...payload }
                }
                return vehicle
            })
        }

        case Types.DELETE: return {
            ...state,
            vehicles: state.vehicles.filter((vehicle: VehicleProps) => {
                return vehicle.code !== payload
            })
        }

        default:
            return state
    }
}