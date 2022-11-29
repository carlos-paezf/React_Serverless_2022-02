import { createAsyncThunk } from "@reduxjs/toolkit"
import { types } from "../../../../../util/types"
import { GetByIdParamsPropsType, GetParamsPropsType } from "../../../../types"

import { createUserFetch, deleteUserFetch, disabledUserFetch, getUserByIdFetch, getUsersFetch, restoreUserFetch, updateUserFetch } from "../services"
import type { UpdateUserPropsType, UserFormPropsType } from "../types"


export const getUsersAPI = createAsyncThunk(
    types.getUsers,
    async ( getParamsProps?: GetParamsPropsType ) => {
        const { data } = await getUsersFetch( getParamsProps )
        return data
    }
)


export const getUserByIdAPI = createAsyncThunk(
    types.getUserById,
    async ( { id, includeDeleted = true }: GetByIdParamsPropsType ) => {
        const { data } = await getUserByIdFetch( { id, includeDeleted } )
        return data
    }
)


export const createUserAPI = createAsyncThunk(
    types.createUser,
    async ( createUserProps: UserFormPropsType ) => {
        const { data } = await createUserFetch( createUserProps )
        return data
    }
)


export const updateUserAPI = createAsyncThunk(
    types.updateUser,
    async ( updateUserProps: UpdateUserPropsType ) => {
        const { data } = await updateUserFetch( updateUserProps )
        return data
    }
)


export const disabledUserAPI = createAsyncThunk(
    types.disabledUser,
    async ( idUser: string ) => {
        const { data } = await disabledUserFetch( idUser )
        return data
    }
)


export const restoreUserAPI = createAsyncThunk(
    types.restoreUser,
    async ( idUser: string ) => {
        const { data } = await restoreUserFetch( idUser )
        return data
    }
)


export const deleteUserAPI = createAsyncThunk(
    types.destroyUser,
    async ( idUser: string ) => {
        const { data } = await deleteUserFetch( idUser )
        return data
    }
)