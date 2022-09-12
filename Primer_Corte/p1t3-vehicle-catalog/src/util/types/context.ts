import { ReactNode } from "react"
import { Types } from "../reducers/types"
import { VehicleProps } from "./components-props"


export type ContextProps = {
    children: ReactNode
}


export type ActionReducer = {
    type: Types
    payload: any
}


export type Dispatch = (action: ActionReducer) => void


export type State = {
    vehicles: VehicleProps[]
}


export type VehicleContextProps = {
    state: State;
    dispatch: Dispatch
}