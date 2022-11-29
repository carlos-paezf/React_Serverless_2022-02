import { ChangeEvent, FormEvent } from "react"

export type GetParamsPropsType = {
    from?: number
    limit?: number
    all?: boolean
    order?: string
}


export interface GetFilterPropsType extends GetParamsPropsType {
    handleChange: ( { target }: ChangeEvent<any>, optionalValue?: string ) => unknown
}


export type GetByIdParamsPropsType = {
    id: string
    includeDeleted?: boolean
}


export type ListComponentPropsType<T> = {
    items: T[]
    handleShowItem: ( id: string ) => unknown
    handleEditItem: ( id: string ) => unknown
    handleDisabledItem: ( id: string ) => unknown
    handleRestoreItem: ( id: string ) => unknown
    handleDeleteItem: ( id: string ) => unknown
}


export type StateType<T> = {
    value?: T[] | []
    selectedItem: T
    status: 'idle' | 'loading' | 'failed'
}


export type FormComponentPropsType<T> = {
    formType: 'NEW' | 'EDIT'
    initialState: T
    handleOnSubmit: ( e: FormEvent<HTMLFormElement>, state: T ) => unknown
}