import { Types } from "../reducers/types"
import { VehicleProps } from "../types"


export const readAction = (data: VehicleProps[]) => {
    return {
        type: Types.READ,
        payload: data
    }
}


export const createAction = (data: VehicleProps) => {
    return {
        type: Types.CREATE,
        payload: data
    }
}


export const editAction = (data: VehicleProps) => {
    return {
        type: Types.EDIT,
        payload: data
    }
}


export const deleteAction = (code: string) => {
    return {
        type: Types.DELETE,
        payload: code
    }
}